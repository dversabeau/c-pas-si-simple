// Point d'enregistrement de l'édition directe sur la page (POST /api/edition).
// Déclaré seulement en local (voir astro.config.mjs) : il n'existe pas sur le site publié.
// Il ne modifie que des textes précis d'une fiche, listés dans CHAMPS_MODIFIABLES.
import type { APIRoute } from 'astro';
import { readFile, writeFile } from 'node:fs/promises';
import yaml from 'js-yaml';

export const prerender = false;

const DOSSIER = new URL('../src/content/fiches/', import.meta.url);

// Chemins autorisés, ex. « arguments.2.constat ». Tout le reste est refusé.
const CHAMPS_TEXTE = new RegExp(
  '^(' +
    [
      'titre',
      'enUnePhrase',
      'arguments\\.\\d+\\.(chiffre|titre|constat|montre)',
      'arguments\\.\\d+\\.(graphique|barres)\\.(titre|note)',
      '(arguments|objections)\\.\\d+\\.barres\\.barres\\.\\d+\\.(libelle|detail)',
      'objections\\.\\d+\\.(objection|reponse)',
      'objections\\.\\d+\\.barres\\.(titre|note)',
      'contexte\\.\\d+\\.(date|acteur|fait|effet)',
      'concepts\\.\\d+\\.(terme|definition)',
    ].join('|') +
    ')$',
);
// Champs qu'on peut laisser vides (ils disparaissent alors de la fiche).
const FACULTATIFS = /\.(effet|note|detail)$/;
// Cases à cocher : validation des sources et des données des graphiques.
const CASES = /^(sources\.\d+\.verifiee|arguments\.\d+\.(graphique|barres)\.verifie|objections\.\d+\.barres\.verifie)$/;
// Le texte libre « Comprendre le débat », sous l'en-tête de la fiche.
const CORPS = 'corps';

type Modification = { chemin: string; valeur: string | boolean };

const repondre = (status: number, corps: object) =>
  new Response(JSON.stringify(corps), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  let demande: { fiche?: string; modifications?: Modification[] };
  try {
    demande = await request.json();
  } catch {
    return repondre(400, { erreur: 'Demande illisible.' });
  }
  const { fiche, modifications } = demande;
  if (!fiche || !/^[a-z0-9-]+$/.test(fiche)) return repondre(400, { erreur: 'Fiche inconnue.' });
  if (!Array.isArray(modifications) || !modifications.length) return repondre(400, { erreur: 'Aucune modification.' });

  const fichier = new URL(`${fiche}.md`, DOSSIER);
  let texte: string;
  try {
    texte = await readFile(fichier, 'utf8');
  } catch {
    return repondre(404, { erreur: 'Fichier de fiche introuvable.' });
  }
  const m = texte.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return repondre(500, { erreur: 'En-tête de fiche illisible.' });

  // CORE_SCHEMA : les dates restent du texte (« 2026-11-07 »), comme dans le fichier.
  const donnees = yaml.load(m[1], { schema: yaml.CORE_SCHEMA }) as Record<string, any>;

  let corps = m[2];
  for (const { chemin, valeur } of modifications) {
    if (chemin === CORPS && typeof valeur === 'string') {
      corps = `\n${valeur.trim()}\n`;
      continue;
    }
    const estCase = typeof chemin === 'string' && CASES.test(chemin) && typeof valeur === 'boolean';
    const estTexte = typeof chemin === 'string' && CHAMPS_TEXTE.test(chemin) && typeof valeur === 'string';
    if (!estCase && !estTexte) return repondre(400, { erreur: `Champ non modifiable : ${chemin}` });
    const etapes = chemin.split('.');
    let cible: any = donnees;
    for (const e of etapes.slice(0, -1)) {
      cible = cible?.[/^\d+$/.test(e) ? Number(e) : e];
      if (cible === undefined) return repondre(400, { erreur: `Champ introuvable : ${chemin}` });
    }
    const cle = etapes[etapes.length - 1];
    if (estCase) {
      cible[cle] = valeur;
      continue;
    }
    const propre = (valeur as string).trim();
    if (!propre && !FACULTATIFS.test(chemin)) return repondre(400, { erreur: `Ce champ ne peut pas être vide : ${chemin}` });
    if (propre) cible[cle] = propre;
    else delete cible[cle];
  }
  donnees.miseAJour = new Date().toISOString().slice(0, 10);

  const entete = yaml.dump(donnees, { schema: yaml.CORE_SCHEMA, lineWidth: 80, noRefs: true });
  await writeFile(fichier, `---\n${entete}---\n${corps}`, 'utf8');
  return repondre(200, { ok: true, modifiees: modifications.length });
};
