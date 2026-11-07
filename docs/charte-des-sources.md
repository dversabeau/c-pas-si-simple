# Charte des sources

## Hiérarchie des sources

1. **Statistique publique** : Insee, DARES, DREES, INED, SSMSI (Intérieur), DEPP (Éducation), Eurostat, OCDE.
2. **Rapports institutionnels** : Cour des comptes, France Stratégie, Conseil d'orientation des retraites, Défenseur des droits, Conseil d'analyse économique.
3. **Études académiques** publiées ou en document de travail (CNRS, universités, IPP, CEPII, OFCE).
4. **Enquêtes d'opinion** (Ifop, Ipsos, Crédoc…) : uniquement pour ce que les gens *pensent*, jamais pour ce qui *est*.
5. **Presse** : seulement pour renvoyer vers une source des niveaux 1 à 4, et à remplacer dès qu'on trouve l'original.

## Règles pour chaque chiffre

- Une année, un périmètre (France entière ou métropole, tranche d'âge) et une définition.
- Le lien pointe vers le document qui contient le chiffre, pas vers une page d'accueil.
- Un calcul fait par nous (différence, ratio) est signalé comme tel.
- Une donnée de plus de 5 ans est signalée si une donnée plus récente existe.

## Cycle de vie d'une fiche

| Statut | Signification | Visible en ligne |
|---|---|---|
| `brouillon` | Générée ou en cours d'écriture | Non |
| `relue` | Toutes les sources ouvertes et vérifiées (`verifiee: true`) | Non |
| `publiee` | Relue, cohérente, validée | Oui |

## Relecture : la liste de contrôle

- [ ] J'ai ouvert chaque source et retrouvé le chiffre exact.
- [ ] Les dates et périmètres sont corrects.
- [ ] Rien n'est présenté comme un fait alors que c'est une interprétation.
- [ ] La liste `aVerifier` est vide.
- [ ] Le ton reste neutre : la fiche pourrait être lue par quelqu'un qui pense le contraire sans se sentir insulté.
