# C pas si simple

Des fiches factuelles et sourcées pour répondre aux idées reçues sur les faits de société en France.

## Lancer le site

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:4321. En développement, toutes les fiches s'affichent, brouillons compris. Le site final (`npm run build`) ne contient que les fiches au statut `publiee`.

## Écrire une fiche

1. Dans Claude Code : `/nouvelle-fiche Les immigrés viennent pour les aides`. Le brouillon est créé dans `src/content/fiches/`.
2. Relire avec la liste de contrôle de [docs/charte-des-sources.md](docs/charte-des-sources.md), passer chaque source vérifiée à `verifiee: true`.
3. Passer `statut` à `publiee`.

Le format d'une fiche est défini dans `src/content.config.ts`. Une erreur de format bloque le build.

## Modifier une fiche dans le navigateur

Avec le site lancé en local (`npm run dev`), ouvrir http://localhost:4321/keystatic, ou cliquer sur « Modifier cette fiche » sous le titre d'une fiche.

- L'éditeur écrit directement dans les fichiers de `src/content/fiches/`. Le site se met à jour à l'enregistrement.
- Il n'existe qu'en local : le site publié ne contient aucune page d'édition.
- Son habillage aux couleurs du site est dans `src/styles/keystatic-theme.css`, et sa page dans `editeur/`.
- Sa structure est décrite dans `keystatic.config.ts`. Tout champ ajouté dans `src/content.config.ts` doit y être ajouté aussi, sinon l'éditeur l'effacerait en enregistrant.

## Modifier une fiche directement sur la page (essai, branche `essai/edition-directe`)

En local, chaque fiche affiche un bouton **« Modifier sur la page »** en bas à droite :

- les textes modifiables s'entourent de pointillés : on clique et on écrit ;
- barre d'outils : gras, italique, lien (Ctrl+B, Ctrl+I, Ctrl+K) ;
- **Enregistrer** écrit les changements dans le fichier de la fiche et met à jour la date de mise à jour ;
- seuls les textes sont modifiables ici (titre, résumé, chiffres, arguments, frise, lexique). Les sources, graphiques et statuts se gèrent dans l'éditeur Keystatic.

Le point d'enregistrement (`editeur/api-edition.ts`) n'existe qu'en local.
