---
name: nouvelle-fiche
description: Génère le brouillon d'une fiche « C pas si simple » à partir d'une idée reçue ou d'un thème. À utiliser quand l'utilisateur dit « nouvelle fiche », « génère une fiche sur… » ou tape /nouvelle-fiche <idée reçue>.
---

# Générer une fiche brouillon

Argument : l'idée reçue ou le thème (ex. « Les immigrés viennent pour les aides »).

## Étapes

1. **Lire** `docs/ligne-editoriale.md` (réglage de ton, orientation, procédés autorisés, règles fixes, exemples) et l'appliquer partie par partie : le ton change les titres, le résumé et les réponses, **jamais le constat**. Lire aussi `docs/charte-des-sources.md` et la fiche exemple `src/content/fiches/les-jeunes-sont-des-feignants.md` (format exact attendu, schéma dans `src/content.config.ts`).
2. **Reformuler** si le thème est un jugement de valeur (« l'immigration est un problème ») : proposer à l'utilisateur 2 ou 3 affirmations vérifiables et lui demander laquelle traiter.
3. **Rechercher** sur le web, en priorité les sources primaires françaises : Insee, DARES, DREES, INED, ministère de l'Intérieur (SSMSI), Cour des comptes, France Stratégie, CEPII, OCDE, Eurostat, études universitaires. Lancer plusieurs recherches en parallèle. Ouvrir les documents pour lire les chiffres, ne pas se contenter de l'extrait du moteur.
4. **Rédiger** le fichier `src/content/fiches/<slug>.md` :
   - `statut: brouillon`, `verifiee: false` sur **toutes** les sources (c'est l'humain qui passe à `true`).
   - **Fiches fournies** : ce sont le cœur du site. Tout est replié par défaut, donc la profondeur ne gêne pas la lecture rapide.
   - **4 arguments maximum** (grille de 2), bien développés plutôt que nombreux. `chiffre` très court (« 93 % », « × 2 »), et `titre` qui **se lit à la suite du chiffre** pour former une phrase : « 93 % » + « des managers croient que… ».
   - Chaque argument a **deux blocs**, 2 à 4 phrases chacun (affichés sous le titre « Quelques chiffres ») :
     - `constat` : le chiffre, l'année, la population, le périmètre, la source.
     - `montre` : le raisonnement qui relie le chiffre à l'idée reçue.
   - Vérifier que la phrase chiffre + titre dit exactement ce que mesure la source (qui est compté : jeunes ? managers ? ménages ?).
   - **Mise en forme** : `**gras**` pour les chiffres et les mots que l'œil doit attraper, **un ou deux passages par paragraphe au maximum**. `*italique*` pour les citations d'idées. `[texte](/fiches/adresse-de-la-fiche)` pour renvoyer vers une autre fiche, même si elle n'existe pas encore (le lien apparaîtra quand elle sera publiée).
   - `objections` : 4 ou 5 arguments parmi les plus utilisés dans le débat public, avec une réponse chiffrée. Ils sont affichés **en premier** sous le titre « Arguments récurrents » : soigner la formulation, telle qu'on l'entend vraiment.
   - 5 ou 6 variantes de formulation familières pour la recherche.
   - `contexte` (« Le contexte politique ») : 4 à 7 étapes datées qui ont mené à la situation actuelle (lois, décrets, votes, décisions du Conseil constitutionnel, plans gouvernementaux). Pour chacune : `date`, `acteur` (gouvernement, ministre et sa fonction à l'époque, parti, Parlement), `fait`, éventuellement `effet`, et au moins une source, de préférence primaire (Légifrance, Assemblée, Sénat, Conseil constitutionnel, vie-publique.fr). Appliquer la section « Nommer la politique » de la ligne éditoriale : des actes et non des intentions, pas de tri selon le camp, respect des limites légales.
   - `liees` : les slugs des fiches connexes (existantes ou prévues). `approfondir` : 2 ou 3 lectures de fond (livre, étude, synthèse), chacune avec une phrase `pourquoi`.
   - Le corps Markdown (« Comprendre le débat ») : pourquoi l'idée est tenace, quel est le vrai débat, encadré « Attention, interprétation » si besoin.
   - Ton : celui fixé par `docs/ligne-editoriale.md`. Les règles fixes de ce fichier (aucun chiffre gonflé, pas de comparaison bancale, pas d'attaque des personnes) priment sur le réglage de ton.
   - `aVerifier` : liste de chaque point incertain (chiffre lu dans une source secondaire, **calcul fait par nous**, source primaire introuvable, URL à confirmer). Elle s'affiche seulement en local, jamais en ligne.
   - **Graphique (facultatif)** : seulement si une série officielle téléchargeable raconte l'argument en une image (évolution dans le temps). Une seule courbe de préférence ; jamais deux séries calées chacune sur une année de base différente du même dessin. Télécharger le fichier source dans le dossier temporaire, calculer la série, l'enregistrer dans `src/data/graphiques/<nom>.csv` (1re colonne = année) et documenter source, date d'extraction et calcul dans `src/data/graphiques/README.md`. Ajouter le champ `graphique` à l'argument concerné (voir la fiche exemple), avec `verifie: false`. Ne jamais saisir de valeurs à la main.
5. **Ne jamais inventer** un chiffre, une URL ou un titre d'étude. Si une donnée n'a pas été trouvée, l'écrire dans `aVerifier` plutôt que de la deviner.
6. **Vérifier** avec `npm run build` que le schéma est respecté.
7. **Résumer** à l'utilisateur : les chiffres retenus, les points à vérifier en priorité, et les liens des sources à ouvrir.
