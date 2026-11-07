import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// L'éditeur Keystatic enregistre les champs laissés vides sous forme de "" ou null,
// et les blocs facultatifs (graphique, barres…) sous forme d'objets vides.
// Ces aides les ramènent à « absent », pour que le schéma reste le même.
const vide = (v: unknown) => (v === '' || v === null ? undefined : v);
const texteFac = z.preprocess(vide, z.string().optional());
const nombreFac = z.preprocess(vide, z.number().optional());
const urlFac = z.preprocess(vide, z.string().url().optional());
/** Bloc facultatif : ignoré tant que son champ principal n'est pas rempli. */
const blocFac = <T extends z.ZodTypeAny>(schema: T, rempli: (v: any) => boolean) =>
  z.preprocess((v) => (v && typeof v === 'object' && rempli(v) ? v : undefined), schema.optional());

// Une source = une référence vérifiable. Les arguments la citent par son `id`.
const source = z.object({
  id: z.string(),
  titre: z.string(),
  auteur: z.string(), // organisme ou auteurs (Insee, DARES, OVE…)
  annee: z.number(),
  url: z.string().url(),
  type: z.enum(['statistique-publique', 'etude-academique', 'rapport-institutionnel', 'enquete-opinion', 'presse']),
  verifiee: z.boolean().default(false), // passée à true après relecture humaine sur la source primaire
});

// Graphique construit par nous à partir d'un CSV daté dans src/data/graphiques/.
const graphique = z.object({
  fichier: z.string(), // nom du CSV, sans extension ; 1re colonne = année
  titre: z.string(),
  unite: z.string(), // ce que mesure l'axe vertical
  series: z.array(z.object({ colonne: z.string(), libelle: z.string() })).min(1).max(4),
  reference: nombreFac, // ligne horizontale de repère (ex. 0 pour un écart en %)
  referenceLibelle: texteFac, // texte écrit sur la ligne de repère
  periodeReference: z.preprocess((v) => (Array.isArray(v) && v.length === 2 ? v : undefined), z.tuple([z.number(), z.number()]).optional()), // bande grise : [début, fin]
  format: z.enum(['decimal', 'ecart-pourcent']).default('decimal'), // « +88 % » au lieu de « 1,88 »
  source: z.string(), // id d'une source de la fiche
  note: texteFac, // calcul effectué, limites
  verifie: z.boolean().default(false),
});

// Graphique en barres : pour comparer quelques montants ou parts (pas d'évolution dans le temps).
// Chaque barre cite sa propre source : on peut comparer des chiffres issus de documents différents.
const barres = z.object({
  titre: z.string(),
  unite: z.enum(['%', 'Md€']),
  barres: z.array(z.object({
    libelle: z.string(),
    valeur: z.number(), // valeur affichée (ou bas de fourchette si `max` est donné)
    max: nombreFac, // haut de fourchette : la barre montre « valeur à max »
    dont: blocFac(z.object({ valeur: z.number(), libelle: z.string() }), (v) => typeof v.valeur === "number" && !!v.libelle), // une part mise en valeur à l'intérieur de la barre
    detail: texteFac, // petite ligne sous le libellé (année, périmètre, « soit ≈ 5 Md€ »)
    source: z.string(), // id d'une source de la fiche
    accent: z.boolean().default(false), // la barre dont parle l'argument
  })).min(2).max(6),
  note: texteFac,
  verifie: z.boolean().default(false),
});

// Les textes acceptent une mise en forme légère :
// **gras**, *italique*, [lien](https://…) et [texte](/fiches/adresse-de-la-fiche) pour renvoyer vers une autre fiche.
const argument = z.object({
  chiffre: z.string(), // le chiffre à retenir, très court : « 93 % », « × 2 »
  titre: z.string(), // se lit à la suite du chiffre : « 93 % » + « des managers pensent… »
  constat: z.string(), // le chiffre, son contexte, sa source
  montre: z.string(), // ce que ça montre : le lien entre le chiffre et l'idée reçue
  sources: z.array(z.string()).min(1),
  graphique: blocFac(graphique, (v) => !!v.fichier), // affiché quand la carte est dépliée
  barres: blocFac(barres, (v) => Array.isArray(v.barres) && v.barres.length > 0),
});

const objection = z.object({
  objection: z.string(), // l'argument tel qu'on l'entend
  reponse: z.string(),
  sources: z.array(z.string()).default([]),
  barres: blocFac(barres, (v) => Array.isArray(v.barres) && v.barres.length > 0), // affiché sous la réponse
});

const fiches = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/fiches' }),
  schema: z.object({
    titre: z.string(), // l'idée reçue telle qu'on l'entend
    theme: z.enum(['travail', 'immigration', 'securite', 'economie', 'jeunesse', 'ecologie']),
    variantes: z.array(z.string()).default([]),
    enUnePhrase: z.string(),
    arguments: z.array(argument).min(1).max(4),
    objections: z.array(objection).default([]), // « Arguments récurrents », affichés en premier
    concepts: z.array(z.object({ terme: z.string(), definition: z.string() })).default([]),
    sources: z.array(source).min(1),
    // Frise « Le contexte politique » : les décisions qui ont mené à la situation actuelle.
    contexte: z.array(z.object({
      date: z.string(), // « 26 janvier 2024 », « 2008 », « novembre 2023 »
      acteur: z.string(), // qui a décidé : gouvernement, ministre, Parlement, Conseil constitutionnel…
      fait: z.string(), // ce qui a été décidé (mise en forme autorisée)
      effet: texteFac, // ce que ça a changé, en une phrase
      sources: z.array(z.string()).min(1),
    })).default([]),
    liees: z.array(z.string()).default([]), // slugs des fiches connexes
    approfondir: z.array(z.object({ // lectures de fond : livres, études, articles
      titre: z.string(),
      auteur: z.string(),
      annee: z.number(),
      url: urlFac,
      pourquoi: z.string(), // en une phrase, ce qu'on y trouve
    })).default([]),
    aVerifier: z.array(z.string()).default([]), // points de relecture, visibles seulement en local
    statut: z.enum(['brouillon', 'relue', 'publiee']).default('brouillon'),
    miseAJour: z.coerce.date(),
  }),
});

export const collections = { fiches };
