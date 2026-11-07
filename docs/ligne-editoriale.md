---
# Réglages lus par la commande /nouvelle-fiche avant chaque rédaction.
# Modifier ces valeurs change le ton des fiches suivantes.
ton: 4            # 1 = neutre et institutionnel … 5 = pamphlet. 4 = incisif, assumé, jamais approximatif.
orientation: "gauche"  # le point de vue assumé : justice sociale, services publics, égalité, solidarité
tutoiement: false # on vouvoie le lecteur quand on l'interpelle
---

# Ligne éditoriale

## L'idée en une phrase

**Incisif sur la forme, incontestable sur le fond.** On assume un point de vue de gauche, on tape là où ça fait mal, mais chaque coup est porté avec un chiffre sourcé. Un adversaire doit pouvoir détester le ton sans pouvoir réfuter un seul chiffre.

## Le style d'écriture

**À la manière de *Libération*.** On reprend ses procédés, jamais ses textes. Le modèle de référence est la fiche [la fraude sociale](../src/content/fiches/la-fraude-sociale-ruine-la-france.md).

Essais écartés (novembre 2026) : un mélange *Alternatives Économiques* et *Libération* (phrases trop courtes, découpage artificiel) et un style *Mediapart* (trop guindé).

### Le corps des textes (constat, ce que ça montre, réponses, résumé)

- **Une langue parlée, vive et fluide.** On écrit comme on l'expliquerait à quelqu'un de bien informé autour d'un café. Des phrases de longueur variée, souvent longues et liées par « et », « mais », « sauf que », « ce qui n'empêche pas », plutôt que hachées.
- **Des mots du quotidien** quand ils sont justes : « les allocs », « la Sécu », « le boulot au noir », « mettre la clé sous la porte ». Le registre familier reste ponctuel et ne remplace jamais le terme exact quand il compte.
- **Interpeller et répondre** : « Et les fameux arrêts maladie de complaisance ? La fraude y est estimée à 1,8 %. » Une ou deux questions par fiche, pas plus.
- **L'ironie sur les discours**, jamais sur les personnes : « un coupable bien commode », « le couplet sur les fraudeurs aux allocs ».
- **Le chiffre au cœur de la phrase**, avec son unité et son année, sans en empiler plus de deux par phrase.
- **Présenter chaque institution la première fois**, au fil de la phrase : « le HCFiPS, chargé d'évaluer chaque année la fraude sociale ».
- **Expliquer le mécanisme** : pas seulement « combien », mais « pourquoi » et « qu'est-ce que ça change ».

### Les titres (titres des cartes)

- **Vifs, avec une chute ou un clin d'œil**, qui retournent l'idée reçue.
- **Le chiffre fait le travail** : le titre le met en scène, il ne le commente pas longuement.
- Ex. : « 52 % de la fraude sociale, c'est du travail au noir. Pas vraiment le portrait-robot du fraudeur qu'on nous vend » ; « 680 M€ récupérés en 2024. La chasse aux fraudeurs ne remplira pas les caisses ».

### Les tics d'écriture à bannir

Ils trahissent un texte généré et fatiguent le lecteur :

- **Les phrases hachées** en série de 8 à 12 mots. Le rythme vient de l'alternance entre phrases longues et courtes.
- **Les deux-points en cascade.** Un deux-points par paragraphe au maximum.
- **La formule « Ce n'est pas X, c'est Y »** et ses variantes. Une fois par fiche au plus.
- **La chute à la fin de chaque paragraphe.** Une formule frappante se mérite : une ou deux par fiche.
- **Les énumérations en trois temps systématiques.**
- **Les clichés** : « noir sur blanc », « l'arbre qui cache la forêt », « angle mort », « il serait malhonnête de », « force est de constater ».
- **Les guillemets ironiques à répétition.** Les guillemets servent surtout aux citations.
- **Les tirets cadratins (—)** pour faire des apartés.
- **Le registre administratif** (« s'agissant de », « au titre de », « imputable à », « s'établit à ») : c'est ce qui rendait la version Mediapart guindée.

Avant de rendre une fiche, la relire à voix haute : une phrase qu'on ne dirait pas à l'oral est à réécrire.

## Nommer la politique

Le site est politique, parce que chaque sujet l'est. On n'a pas peur de citer des lois, des gouvernements, des partis et des responsables quand ça éclaire le propos : la situation décrite par une fiche est souvent le résultat de choix identifiables.

- **Des actes, pas des intentions** : loi votée, décret, vote nominatif, amendement, décision du Conseil constitutionnel, déclaration publique datée. On ne prête d'arrière-pensée à personne.
- **Une source primaire par fait** : Légifrance, Assemblée nationale, Sénat, Conseil constitutionnel, vie-publique.fr, communiqué officiel. Une citation se reproduit mot pour mot, avec sa date et son support.
- **Attribuer précisément** : la loi par sa date et son intitulé, le responsable par sa fonction à l'époque (« Gérald Darmanin, alors ministre de l'Intérieur »), le parti quand il a porté ou voté le texte.
- **Pas de tri selon le camp** : si un gouvernement de gauche a pris une mesure allant dans le même sens, on le dit aussi.
- **Le ton est libre**, jusqu'à la satire des discours et des décisions, tant qu'on reste dans la loi.

### Les limites légales (loi du 29 juillet 1881 sur la liberté de la presse)

- **Diffamation** : imputer à une personne nommée ou identifiable un fait précis qui porte atteinte à son honneur. On ne l'écrit que si le fait est public et sourcé (une condamnation définitive, un vote, une déclaration), et on cite la source.
- **Injure** : une expression outrageante sans fait précis (« escroc », « menteur », « facho »). Interdite, même sur le ton de l'humour.
- **Provocation à la haine ou à la discrimination** envers un groupe en raison de son origine, sa religion, son sexe, etc. Sans objet pour notre ligne, mais on n'en approche jamais, y compris par ironie.
- **Présomption d'innocence** : une personne mise en cause mais non condamnée l'est « mise en examen » ou « soupçonnée », jamais « coupable ».
- **Le droit de critiquer** des décisions, des lois, des programmes et des discours publics est, lui, très large. On en use.

## Ce qui change selon les parties de la fiche

| Partie | Ton | Règle |
|---|---|---|
| `titre` des cartes (après le chiffre) | **Incisif** | Une phrase qui claque, qui retourne l'idée reçue. |
| `enUnePhrase` (« En résumé ») | **Incisif** | Interpelle, renverse la perspective, finit sur une chute. |
| `objections` → `reponse` (« Arguments récurrents ») | **Incisif** | Réponse directe, qui commence souvent par contredire. Un chiffre dans les deux premières phrases. |
| `montre` (« Ce que ça montre ») | **Ferme** | Conclut clairement et nomme les responsabilités, sans extrapoler au-delà des données. |
| `constat` (« Le constat ») | **Factuel** | Chiffre exact, année, périmètre, source. Le style peut rendre la phrase vivante, mais aucun mot ne doit grossir ou orienter le chiffre. C'est le bouclier. |
| Lexique, sources, lectures | **Neutre** | Descriptif. |

## Les procédés autorisés

- **Renverser la perspective** : on parle des allocataires ? On montre les employeurs, les plateformes, les plus aisés.
- **Mettre deux chiffres côte à côte** quand la comparaison est honnête (même périmètre, même année ou presque).
- **Interpeller le lecteur** : « On vous parle de… ? », « Vous l'entendez souvent ? ».
- **L'ironie légère**, sur les idées et les discours, jamais sur les personnes.
- **Nommer les choix politiques** : « on a choisi de… », « on préfère traquer… », quand les faits le soutiennent.
- **Citer les institutions contre le discours dominant** : une phrase de la Cour des comptes ou du HCFiPS pèse plus lourd qu'un adjectif.

## Les règles qui ne bougent jamais, quel que soit le réglage

1. **Aucun chiffre gonflé, arrondi à l'avantage, ou sorti de son périmètre.** « Environ 5 milliards » reste « environ 5 milliards ».
2. **Pas de comparaison bancale** : deux chiffres comparés ont la même nature (estimé contre estimé, pas estimé contre détecté).
3. **Pas d'attaque contre des personnes ou des groupes** (« les patrons », « les riches », « les fachos »). On vise des comportements, des politiques, des discours.
4. **Pas d'insulte, pas de vulgarité, pas de procès d'intention.**
5. **On ne cache pas ce qui nous dessert** : si un chiffre va dans le sens de l'idée reçue (ex. fraude au RSA), on le dit, et on le remet en perspective.
6. **Une interprétation reste signalée comme telle**, même dite avec conviction.

## Exemples avant / après

**Résumé (fraude sociale)**
- Neutre : « La fraude sociale est estimée à 14 milliards d'euros par an, dont plus de la moitié vient des cotisations non payées. »
- Ton 4 : « On vous parle des fraudeurs aux allocs ? **Plus de la moitié de la fraude sociale, ce sont des cotisations jamais payées**, surtout par du travail non déclaré. Ceux-là, on en parle beaucoup moins. »

**Titre de carte**
- Neutre : « 680 M€ récupérés sur la fraude en 2024 : pas de quoi combler le déficit »
- Ton 4 : « 680 M€ récupérés en 2024. La « cagnotte » de la fraude n'existe pas. »

**Réponse à un argument récurrent**
- Neutre : « La fraude des bénéficiaires représente 36 % des 14 milliards estimés. »
- Ton 4 : « Oui, ça existe : environ 5 milliards. Mais c'est **moins que la fraude aux cotisations**, qui pèse plus de la moitié du total. Pourtant, **trois Français sur quatre** sont convaincus que beaucoup de gens touchent des allocations sans y avoir droit. »
- Remarque : la pique finale s'appuie sur un chiffre (baromètre DREES cité par le HCFiPS). Une formule comme « c'est rarement celle qu'on montre au 20 heures » serait une insinuation sans donnée : à éviter.

**À éviter (même en ton 5)**
- « Les patrons volent la Sécu » → vise un groupe entier, et c'est faux pour l'immense majorité.
- « La fraude sociale, c'est un mythe » → faux : elle existe, elle est simplement surestimée dans le débat.
