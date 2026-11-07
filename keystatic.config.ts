// Éditeur visuel des fiches, accessible en local sur http://localhost:4321/keystatic
// La structure reprend exactement celle de src/content.config.ts : si on ajoute un champ là-bas,
// il faut l'ajouter ici aussi, sinon l'éditeur l'effacerait en enregistrant.
import { config, collection, fields } from '@keystatic/core';
import { createElement } from 'react';

// Petit logo dans l'en-tête de l'éditeur : un « C » terre cuite, comme le mot « simple » du site.
const Logo = () =>
  createElement(
    'span',
    {
      style: {
        display: 'inline-grid',
        placeItems: 'center',
        width: 26,
        height: 26,
        borderRadius: 7,
        background: '#b5462f',
        color: '#fff',
        fontFamily: "'Fraunces', Georgia, serif",
        fontWeight: 700,
        fontSize: 16,
      },
    },
    'C',
  );

// Texte riche (WYSIWYG) limité à ce que le site sait afficher : gras, italique, liens.
// Il s'enregistre en Markdown dans la fiche (**gras**, _italique_, [texte](lien)).
// Pour renvoyer vers une autre fiche : un lien vers /fiches/adresse-de-la-fiche.
const texteLong = (label: string, description?: string) =>
  fields.markdoc.inline({
    label,
    description: description ?? 'Gras, italique et liens. Lien vers une autre fiche : /fiches/adresse-de-la-fiche',
    options: {
      bold: true,
      italic: true,
      link: true,
      strikethrough: false,
      code: false,
      heading: false,
      blockquote: false,
      orderedList: false,
      unorderedList: false,
      table: false,
      image: false,
      divider: false,
      codeBlock: false,
    },
  });

const idsSources = (label = 'Sources') =>
  fields.array(fields.text({ label: 'Identifiant de source' }), {
    label,
    description: 'Les identifiants déclarés dans « Sources » en bas de la fiche (ex. hcfips2026).',
    itemLabel: (p) => p.value || 'source',
  });

const barres = fields.object(
  {
    titre: fields.text({ label: 'Titre du graphique' }),
    unite: fields.select({
      label: 'Unité',
      options: [
        { label: '%', value: '%' },
        { label: 'Md€', value: 'Md€' },
        { label: 'Nombre (effectifs)', value: 'nombre' },
      ],
      defaultValue: '%',
    }),
    barres: fields.array(
      fields.object({
        libelle: fields.text({ label: 'Libellé' }),
        detail: fields.text({ label: 'Détail (petite ligne)' }),
        valeur: fields.number({ label: 'Valeur (ou bas de fourchette)' }),
        max: fields.number({ label: 'Haut de fourchette (facultatif)' }),
        dont: fields.object(
          {
            valeur: fields.number({ label: 'Valeur de la part' }),
            libelle: fields.text({ label: 'Libellé de la part' }),
          },
          { label: 'Part « dont » (facultatif)' },
        ),
        source: fields.text({ label: 'Identifiant de source' }),
        accent: fields.checkbox({ label: 'Barre mise en avant' }),
      }),
      { label: 'Barres', itemLabel: (p) => p.fields.libelle.value || 'barre' },
    ),
    note: fields.text({ label: 'Note', multiline: true }),
    verifie: fields.checkbox({ label: 'Données vérifiées' }),
  },
  { label: 'Graphique en barres (facultatif : laisser les barres vides pour ne rien afficher)' },
);

const graphique = fields.object(
  {
    fichier: fields.text({ label: 'Fichier CSV', description: 'Nom du fichier dans src/data/graphiques, sans .csv. Vide = pas de graphique.' }),
    titre: fields.text({ label: 'Titre' }),
    unite: fields.text({ label: 'Ce que mesure l’axe' }),
    series: fields.array(
      fields.object({
        colonne: fields.text({ label: 'Colonne du CSV' }),
        libelle: fields.text({ label: 'Libellé' }),
      }),
      { label: 'Courbes', itemLabel: (p) => p.fields.libelle.value || 'courbe' },
    ),
    reference: fields.number({ label: 'Ligne de repère (facultatif)' }),
    referenceLibelle: fields.text({ label: 'Texte de la ligne de repère' }),
    periodeReference: fields.array(fields.integer({ label: 'Année' }), {
      label: 'Période de référence (2 années, facultatif)',
      itemLabel: (p) => String(p.value ?? ''),
    }),
    format: fields.select({
      label: 'Format',
      options: [
        { label: 'Décimal (1,88)', value: 'decimal' },
        { label: 'Écart en % (+88 %)', value: 'ecart-pourcent' },
      ],
      defaultValue: 'decimal',
    }),
    source: fields.text({ label: 'Identifiant de source' }),
    note: fields.text({ label: 'Note', multiline: true }),
    verifie: fields.checkbox({ label: 'Données vérifiées' }),
  },
  { label: 'Graphique en courbes (facultatif)' },
);

export default config({
  storage: { kind: 'local' },
  locale: 'fr-FR',
  ui: { brand: { name: 'C pas si simple', mark: Logo } },
  collections: {
    fiches: collection({
      label: 'Fiches',
      path: 'src/content/fiches/*',
      slugField: 'titre',
      format: { contentField: 'corps' },
      entryLayout: 'form',
      columns: ['titre', 'theme', 'statut'],
      schema: {
        titre: fields.slug({
          name: { label: 'Idée reçue (titre)' },
          slug: { label: 'Adresse de la fiche', description: 'Ne pas modifier une fois la fiche publiée.' },
        }),
        theme: fields.select({
          label: 'Thème',
          options: [
            { label: 'Travail', value: 'travail' },
            { label: 'Immigration', value: 'immigration' },
            { label: 'Économie', value: 'economie' },
            { label: 'Sécurité', value: 'securite' },
            { label: 'Jeunesse', value: 'jeunesse' },
            { label: 'Écologie', value: 'ecologie' },
          ],
          defaultValue: 'travail',
        }),
        statut: fields.select({
          label: 'Statut',
          options: [
            { label: 'Brouillon', value: 'brouillon' },
            { label: 'Relue', value: 'relue' },
            { label: 'Publiée', value: 'publiee' },
          ],
          defaultValue: 'brouillon',
        }),
        miseAJour: fields.date({ label: 'Mise à jour', defaultValue: { kind: 'today' } }),
        variantes: fields.array(fields.text({ label: 'Formulation' }), {
          label: 'Autres formulations (pour la recherche)',
          itemLabel: (p) => p.value || 'formulation',
        }),
        aVerifier: fields.array(fields.text({ label: 'Point', multiline: true }), {
          label: 'À vérifier avant publication',
          itemLabel: (p) => p.value.slice(0, 80) || 'point',
        }),
        objections: fields.array(
          fields.object({
            objection: fields.text({ label: 'L’argument tel qu’on l’entend' }),
            reponse: texteLong('Réponse'),
            sources: idsSources(),
            barres,
          }),
          { label: 'Arguments récurrents', itemLabel: (p) => p.fields.objection.value || 'argument' },
        ),
        enUnePhrase: texteLong('En résumé'),
        arguments: fields.array(
          fields.object({
            chiffre: fields.text({ label: 'Chiffre (« 52 % »)' }),
            titre: fields.text({ label: 'Titre (se lit après le chiffre)' }),
            constat: texteLong('Le constat'),
            montre: texteLong('Ce que ça montre'),
            sources: idsSources(),
            graphique,
            barres,
          }),
          {
            label: 'Quelques chiffres (4 maximum)',
            itemLabel: (p) => `${p.fields.chiffre.value} ${p.fields.titre.value}`.trim() || 'chiffre',
          },
        ),
        contexte: fields.array(
          fields.object({
            date: fields.text({ label: 'Date' }),
            acteur: fields.text({ label: 'Acteur' }),
            fait: texteLong('Ce qui a été décidé'),
            effet: texteLong('Ce que ça a changé (facultatif)'),
            sources: idsSources(),
          }),
          { label: 'Le contexte politique', itemLabel: (p) => `${p.fields.date.value} · ${p.fields.acteur.value}` },
        ),
        liees: fields.array(fields.relationship({ label: 'Fiche liée', collection: 'fiches' }), {
          label: 'Fiches liées',
          description: 'On peut aussi lier une fiche pas encore écrite en modifiant le fichier directement.',
          itemLabel: (p) => p.value || 'fiche',
        }),
        approfondir: fields.array(
          fields.object({
            titre: fields.text({ label: 'Titre' }),
            auteur: fields.text({ label: 'Auteur' }),
            annee: fields.integer({ label: 'Année' }),
            url: fields.url({ label: 'Lien (facultatif)' }),
            pourquoi: texteLong('Ce qu’on y trouve'),
          }),
          { label: 'Lectures pour approfondir', itemLabel: (p) => p.fields.titre.value || 'lecture' },
        ),
        concepts: fields.array(
          fields.object({
            terme: fields.text({ label: 'Terme' }),
            definition: texteLong('Définition'),
          }),
          { label: 'Lexique', itemLabel: (p) => p.fields.terme.value || 'terme' },
        ),
        sources: fields.array(
          fields.object({
            id: fields.text({ label: 'Identifiant (court, sans espace)' }),
            titre: fields.text({ label: 'Titre du document' }),
            auteur: fields.text({ label: 'Auteur ou organisme' }),
            annee: fields.integer({ label: 'Année' }),
            url: fields.url({ label: 'Lien' }),
            type: fields.select({
              label: 'Type',
              options: [
                { label: 'Statistique publique', value: 'statistique-publique' },
                { label: 'Étude académique', value: 'etude-academique' },
                { label: 'Rapport institutionnel', value: 'rapport-institutionnel' },
                { label: 'Enquête d’opinion', value: 'enquete-opinion' },
                { label: 'Presse', value: 'presse' },
              ],
              defaultValue: 'statistique-publique',
            }),
            verifiee: fields.checkbox({ label: 'Vérifiée sur le document original' }),
          }),
          {
            label: 'Sources',
            itemLabel: (p) => `${p.fields.verifiee.value ? '✓' : '○'} ${p.fields.id.value} · ${p.fields.auteur.value}`,
          },
        ),
        corps: fields.markdoc({ label: 'Comprendre le débat', extension: 'md' }),
      },
    }),
  },
});
