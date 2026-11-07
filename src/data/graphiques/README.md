# Données des graphiques

Un CSV par graphique. La première colonne est l'année, séparateur virgule, point décimal.
Les données ne sont jamais récupérées en direct : on garde ici une copie datée, pour savoir exactement ce qui est affiché.

## prix-logement-revenu.csv

- **Source :** CGEDD (IGEDD), Jacques Friggit, « Valeurs immobilières, économiques et financières de 1800 à 2020 », classeur mis à jour le 6 janvier 2023.
  https://www.igedd.developpement-durable.gouv.fr/IMG/xls/valeur-immobilier-1800-2020_cle2abd1f.xls
- **Extraction :** 7 novembre 2026, onglet « Series ».
- **Calcul :**
  - `prix_sur_revenu` = indice du prix des logements France ÷ (revenu disponible des ménages ÷ nombre de ménages), ramené à 1 en 2000.
  - `ecart_normale_pct` = écart en % entre `prix_sur_revenu` et sa moyenne sur 1965-2000 (0,923). C'est la colonne affichée : 2020 = +87,8 %.
  - L'ancienne colonne loyers a été retirée : deux courbes calées chacune sur 2000 laissaient croire qu'on comparait achat et location.
- **Limites :** 2020 est une année atypique (Covid). Le classeur s'arrête en 2020. Pour les années suivantes, il faudra la mise à jour de l'IGEDD ou recalculer avec les séries Insee.
