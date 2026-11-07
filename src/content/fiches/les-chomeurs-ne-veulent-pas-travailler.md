---
titre: "Les chômeurs ne veulent pas travailler"
theme: travail
variantes:
  - "Les chômeurs profitent du système"
  - "On gagne plus au chômage qu'en travaillant"
  - "Il y a du travail, il suffit de traverser la rue"
  - "Les chômeurs refusent les emplois proposés"
  - "Le chômage, c'est des vacances payées"
  - "Les assistés vivent des allocs"
enUnePhrase: "Le chômeur qui se la coule douce aux frais de la collectivité, c'est un classique. Sauf que **seuls 40 % des inscrits à France Travail touchent une allocation**, en moyenne autour de 1 050 euros brut par mois, que **55 % des chômeurs contrôlés cherchent activement** un emploi, et qu'entre **un quart et deux cinquièmes** de ceux qui ont droit à l'assurance chômage ne la demandent même pas. Quant aux offres « qui ne trouvent pas preneur », elles pèsent environ **151 000**, face à **2,8 millions** de demandeurs d'emploi sans activité."
arguments:
  - chiffre: "40 %"
    titre: "seulement des inscrits à France Travail touchent une allocation chômage. Le chômeur gavé d'allocs est minoritaire"
    constat: "Selon l'Unédic, l'organisme qui gère l'assurance chômage, environ **40 % des demandeurs d'emploi inscrits** à France Travail étaient indemnisés début 2025. Ceux qui le sont touchent en moyenne autour de **1 050 euros brut par mois** (1 046 euros selon l'Unédic au 4e trimestre 2024, 1 075 euros selon la Dares en décembre 2024)."
    montre: "La majorité des chômeurs ne touche donc aucune allocation chômage : fin de droits, trop peu d'heures travaillées pour en ouvrir, jeunes sans expérience… Et pour ceux qui en touchent une, on parle d'un revenu proche du Smic, pas d'une rente. Difficile d'en faire un mode de vie confortable."
    sources: [unedic_chiffres2025, dares_montant]
  - chiffre: "55 %"
    titre: "des chômeurs contrôlés en 2024 cherchaient activement un emploi. Les profiteurs, on les cherche encore"
    constat: "France Travail a réalisé **610 780 contrôles** de la recherche d'emploi en 2024, en hausse de 16,7 % sur un an. Selon le bilan relayé par Europe 1, **55 %** des personnes contrôlées étaient en recherche active, **21 %** avaient besoin d'être « redynamisées », et **17 %** ont été radiées."
    montre: "Même en ciblant les contrôles, plus de la moitié des chômeurs contrôlés font exactement ce qu'on attend d'eux. Les 17 % de radiations existent, il ne s'agit pas de le nier, mais une radiation sanctionne souvent un rendez-vous manqué ou un dossier incomplet, pas forcément un refus de travailler. C'est d'ailleurs pour cette raison que la procédure a été revue en 2025."
    sources: [ft_controle2024, europe1_controle2024]
  - chiffre: "151 000"
    titre: "offres abandonnées faute de candidat en 2024, pour 2,8 millions de chômeurs. Le compte n'y est pas"
    constat: "Selon France Travail, cité par l'Unédic, environ **151 000 offres** d'emploi ont été abandonnées faute de candidat en 2024, dont **99 000** pour des emplois durables. Cela représente **4,9 %** des offres déposées. Au même moment, la Dares comptait environ **2,8 millions** d'inscrits en catégorie A, c'est-à-dire sans aucune activité."
    montre: "Même si chacune de ces offres trouvait preneur demain matin, il resterait plus de 2,6 millions de chômeurs sans activité. Le chômage de masse ne vient pas d'un refus de travailler mais d'un manque d'emplois, et les postes difficiles à pourvoir se concentrent dans des métiers aux salaires bas, aux horaires décalés ou loin de chez soi."
    sources: [unedic_offres, bdt_categorieA]
    barres:
      titre: "Offres abandonnées faute de candidat et demandeurs d'emploi sans activité (2024)"
      unite: "nombre"
      barres:
        - libelle: "Offres abandonnées faute de candidat"
          detail: "France Travail, 2024"
          valeur: 151000
          dont:
            valeur: 99000
            libelle: "emplois durables (CDI ou plus de six mois)"
          source: unedic_offres
          accent: true
        - libelle: "Demandeurs d'emploi sans activité"
          detail: "catégorie A, début 2024"
          valeur: 2800000
          source: bdt_categorieA
      note: "Ordres de grandeur : l'indicateur d'offres abandonnées ne couvre que les offres déposées à France Travail."
  - chiffre: "25 à 42 %"
    titre: "des chômeurs qui ont droit à l'allocation ne la demandent pas. Drôles de profiteurs"
    constat: "Une étude de la Dares, le service statistique du ministère du Travail, menée avec des chercheurs de l'École d'économie de Paris, estime qu'entre **25 et 42 %** des personnes éligibles à l'assurance chômage n'y ont pas recours, soit **390 000 à 690 000 personnes** par an (données 2018-2019)."
    montre: "Le non-recours touche surtout les salariés en intérim ou en CDD et ceux qui ont peu travaillé. Des centaines de milliers de personnes laissent donc de côté une allocation à laquelle elles ont cotisé. On cherche les fraudeurs, on trouve surtout des gens qui renoncent à leurs droits, comme pour le RSA (voir la fiche [sur la fraude sociale](/fiches/la-fraude-sociale-ruine-la-france))."
    sources: [dares_nonrecours]
objections:
  - objection: "On gagne plus au chômage qu'en travaillant"
    reponse: "Impossible par construction : l'allocation chômage est calculée comme une part du salaire perdu, **entre 57 % et 75 % du salaire brut de référence**, et ne peut jamais le dépasser. En net, l'Unédic estime le taux de remplacement moyen autour de **71 %**. Au chômage, on gagne donc moins qu'en travaillant, et pour une durée limitée."
    sources: [unedic_montant]
  - objection: "Il y a du travail, il suffit de traverser la rue"
    reponse: "Environ **151 000 offres** ont été abandonnées faute de candidat en 2024, pour **2,8 millions** de demandeurs d'emploi sans activité. Il y a donc bien des postes difficiles à pourvoir, mais à peine un pour dix-huit chômeurs, et souvent dans des métiers aux conditions difficiles. Traverser la rue ne suffit pas à faire apparaître les emplois manquants."
    sources: [unedic_offres, bdt_categorieA]
    barres:
      titre: "Une offre abandonnée pour dix-huit chômeurs sans activité (2024)"
      unite: "nombre"
      barres:
        - libelle: "Offres abandonnées faute de candidat"
          valeur: 151000
          source: unedic_offres
          accent: true
        - libelle: "Demandeurs d'emploi en catégorie A"
          valeur: 2800000
          source: bdt_categorieA
  - objection: "Le chômage, c'est des vacances payées"
    reponse: "Des vacances de plus en plus courtes : depuis février 2023, la durée d'indemnisation est **réduite de 25 %** tant que le taux de chômage reste sous 9 %. Quelqu'un qui a travaillé deux ans n'est plus indemnisé que 18 mois au lieu de 24. Et rappelons que **60 % des inscrits** ne touchent aucune allocation chômage."
    sources: [previssima2023, unedic_chiffres2025]
  - objection: "Ils refusent les emplois qu'on leur propose"
    reponse: "Les contrôles de France Travail disent le contraire : sur plus de 600 000 contrôles en 2024, **55 %** ont confirmé une recherche active. Et le refus de deux « offres raisonnables d'emploi » est déjà sanctionné par la loi. Depuis la loi pour le plein emploi, l'allocation peut aussi être suspendue plus facilement."
    sources: [ft_controle2024, europe1_controle2024, vp_pleinemploi]
  - objection: "Les jeunes préfèrent toucher le RSA"
    reponse: "Encore faudrait-il qu'ils y aient droit : les moins de 25 ans en sont exclus, sauf exceptions. Voir la fiche [sur les jeunes](/fiches/les-jeunes-sont-des-feignants)."
    sources: []
concepts:
  - terme: "Catégorie A"
    definition: "Demandeurs d'emploi inscrits à France Travail, tenus de chercher un emploi et **sans aucune activité** dans le mois. Les catégories B et C regroupent ceux qui ont travaillé un peu."
  - terme: "Indemnisable et indemnisé"
    definition: "Un demandeur **indemnisable** a des droits ouverts à l'assurance chômage. Il n'est **indemnisé** que les mois où il touche effectivement une allocation (il peut par exemple avoir travaillé ce mois-là)."
  - terme: "ARE"
    definition: "Allocation d'aide au retour à l'emploi, le nom officiel de l'allocation chômage. Elle est financée par les cotisations et calculée à partir du salaire perdu."
  - terme: "Salaire journalier de référence"
    definition: "Moyenne journalière des salaires perçus avant la perte d'emploi. L'allocation en représente entre 57 % et 75 %, selon le niveau de salaire."
  - terme: "Offre abandonnée faute de candidat"
    definition: "Offre déposée à France Travail que l'employeur retire sans avoir trouvé de candidat adéquat. C'est un indicateur bien plus étroit que les « emplois vacants »."
contexte:
  - date: "26 juillet 2019"
    acteur: "Gouvernement d'Édouard Philippe (LREM), Muriel Pénicaud au Travail"
    fait: "Un décret durcit l'accès à l'assurance chômage : il faut désormais avoir travaillé **6 mois sur les 24 derniers mois**, au lieu de 4 mois sur 28."
    effet: "Les contrats courts et les jeunes sont les premiers exclus de l'indemnisation."
    sources: [legisocial2019]
  - date: "1er février 2023"
    acteur: "Gouvernement d'Élisabeth Borne, Olivier Dussopt au Travail"
    fait: "La loi du 21 décembre 2022 permet de **réduire de 25 % la durée d'indemnisation** tant que le taux de chômage reste sous 9 %."
    effet: "24 mois de travail ouvrent désormais 18 mois de droits au lieu de 24."
    sources: [previssima2023]
  - date: "18 décembre 2023"
    acteur: "Gouvernement d'Élisabeth Borne, Olivier Dussopt au Travail"
    fait: "La **loi pour le plein emploi** transforme Pôle emploi en France Travail, inscrit automatiquement tous les allocataires du RSA et conditionne le RSA à au moins 15 heures d'activité par semaine."
    sources: [vp_pleinemploi]
  - date: "2024"
    acteur: "France Travail et gouvernement"
    fait: "**610 780 contrôles** de la recherche d'emploi, en hausse de 16,7 %. Le gouvernement fixe l'objectif de 1,5 million de contrôles par an en 2027."
    sources: [ft_controle2024, europe1_controle2024]
  - date: "1er avril 2025"
    acteur: "Partenaires sociaux et gouvernement de François Bayrou"
    fait: "Entrée en vigueur de nouvelles règles d'assurance chômage, issues de la convention signée en novembre 2024 (décret n° 2025-250)."
    sources: [aj_2025]
liees:
  - les-jeunes-sont-des-feignants
  - la-fraude-sociale-ruine-la-france
approfondir:
  - titre: "Les demandeurs d'emploi ne cherchent pas vraiment à travailler ?"
    auteur: "Unédic"
    annee: 2024
    url: "https://www.unedic.org/lassurance-chomage-en-france/decryptage/les-demandeurs-d-emploi-ne-cherchent-pas-vraiment-a-travailler"
    pourquoi: "Le décryptage de l'organisme qui gère l'assurance chômage, chiffres à l'appui."
  - titre: "Marché du travail : comprendre les emplois vacants, les offres non pourvues, les tensions"
    auteur: "Unédic"
    annee: 2025
    url: "https://www.unedic.org/publications/marche-du-travail-comprendre-les-emplois-vacants-les-offres-non-pourvues-les-tensions"
    pourquoi: "Pourquoi le chiffre des « offres non pourvues » est souvent **mal utilisé**."
  - titre: "Baromètre Unédic : 8 idées reçues sur les demandeurs d'emploi"
    auteur: "Unédic"
    annee: 2024
    url: "https://www.unedic.org/publications/barometre-unedic-8-idees-recues-sur-les-demandeurs-demploi"
    pourquoi: "Ce que pensent les Français des chômeurs, comparé à la réalité."
aVerifier:
  - "40 % d'inscrits indemnisés début 2025 : chiffre lu dans un résumé de publication Unédic. Le retrouver dans les « Chiffres clés » de février 2025 et préciser le périmètre (catégories A à E ?)."
  - "Allocation moyenne : 1 075 € (Dares, décembre 2024) lu via Moneyvox. Retrouver la publication Dares d'origine."
  - "Contrôles 2024 : 55 % en recherche active, 21 % à redynamiser, 17 % radiés lus via Europe 1. Les retrouver dans le bilan officiel de France Travail."
  - "2,8 millions en catégorie A : chiffre du 1er trimestre 2024, lu dans un document secondaire. Retrouver la publication Dares et utiliser la moyenne annuelle 2024 si possible."
  - "« Une offre pour dix-huit chômeurs » et « plus de 2,6 millions » sont **nos calculs** (2 800 000 ÷ 151 000 ≈ 18,5 ; 2 800 000 − 151 000). Les deux chiffres ne portent pas exactement sur la même période."
  - "Non-recours 25 à 42 % : étude Dares de 2022 lue via des articles. Vérifier que le PDF cité est bien l'étude « Quantifier le non-recours à l'assurance chômage »."
  - "Taux de remplacement net moyen de 71 % : chiffre Unédic lu dans un résumé, à confirmer sur la page de l'Unédic."
  - "Refus de deux offres raisonnables d'emploi : vérifier la règle en vigueur après la loi plein emploi."
  - "Décret de 2019 : la source actuelle est un site d'actualité juridique. Citer le décret n° 2019-797 sur Légifrance."
  - "Objectif de 1,5 million de contrôles en 2027 : vérifier qui l'a fixé et quand."
sources:
  - id: unedic_chiffres2025
    titre: "Chiffres clés : les indicateurs de l'Assurance chômage, février 2025"
    auteur: "Unédic"
    annee: 2025
    url: "https://unedic.org/storage/uploads/2025/02/21/Chiffres-cles-Les-indicateurs-de-l-Assurance-chomage-fevrier-2025_uid_67b88d023e0ed.pdf"
    type: statistique-publique
  - id: dares_montant
    titre: "France Travail : votre allocation chômage est-elle supérieure à la moyenne ? (données Dares)"
    auteur: "Moneyvox"
    annee: 2025
    url: "https://www.moneyvox.fr/votre-argent/actualites/107560/france-travail-votre-allocation-chomage-est-elle-superieure-a-la-moyenne"
    type: presse
  - id: ft_controle2024
    titre: "Bilan 2024 du contrôle de la recherche d'emploi et retour sur la nouvelle procédure de contrôle"
    auteur: "France Travail"
    annee: 2025
    url: "https://www.francetravail.org/accueil/communiques/2025/bilan-2024-du-controle-de-la-recherche-d%27emploi-et-retour-sur-la-nouvelle-procedure-de-controle.html?type=article"
    type: rapport-institutionnel
  - id: europe1_controle2024
    titre: "Contrôle des chômeurs : le bilan 2024"
    auteur: "Europe 1"
    annee: 2025
    url: "https://www.europe1.fr/node/708224"
    type: presse
  - id: unedic_offres
    titre: "Marché du travail : comprendre les emplois vacants, les offres non pourvues, les tensions"
    auteur: "Unédic"
    annee: 2025
    url: "https://www.unedic.org/publications/marche-du-travail-comprendre-les-emplois-vacants-les-offres-non-pourvues-les-tensions"
    type: rapport-institutionnel
  - id: bdt_categorieA
    titre: "Les intentions de recrutement ralentissent en 2024 (données Dares sur les demandeurs d'emploi)"
    auteur: "Banque des territoires"
    annee: 2024
    url: "https://www.banquedesterritoires.fr/les-intentions-de-recrutement-ralentissent-en-2024"
    type: presse
  - id: dares_nonrecours
    titre: "Quantifier le non-recours à l'assurance chômage"
    auteur: "Dares"
    annee: 2022
    url: "https://dares.travail-emploi.gouv.fr/sites/default/files/9b0bc3e2ed2043b657b2873ac4a8f8e7/Dares_DE_%C3%A9ligibilit%C3%A9_AC.pdf"
    type: statistique-publique
  - id: unedic_montant
    titre: "Le montant de l'allocation chômage"
    auteur: "Unédic"
    annee: 2024
    url: "https://www.unedic.org/publications/le-montant-de-lallocation-chomage"
    type: rapport-institutionnel
  - id: previssima2023
    titre: "Assurance chômage : la modulation de la durée d'indemnisation est entrée en vigueur ce 1er février 2023"
    auteur: "Previssima"
    annee: 2023
    url: "https://www.previssima.fr/actualite/assurance-chomage-la-modulation-de-la-duree-dindemnisation-est-entree-en-vigueur-ce-1er-fevrier-2023.html"
    type: presse
  - id: vp_pleinemploi
    titre: "Loi du 18 décembre 2023 pour le plein emploi"
    auteur: "Vie publique"
    annee: 2023
    url: "https://www.vie-publique.fr/loi/289715-projet-de-loi-plein-emploi-france-travail-rsa-handicapes"
    type: rapport-institutionnel
  - id: legisocial2019
    titre: "La ministre du Travail présente la réforme de l'assurance chômage"
    auteur: "Legisocial"
    annee: 2019
    url: "https://www.legisocial.fr/actualites-sociales/5591-ministre-travail-presente-reforme-assurance-chomage.html"
    type: presse
  - id: aj_2025
    titre: "Nouvelles règles d'assurance chômage"
    auteur: "Actu-Juridique"
    annee: 2025
    url: "https://www.actu-juridique.fr/breves/social/nouvelles-regles-dassurance-chomage/"
    type: presse
statut: brouillon
miseAJour: 2026-11-07
---

### Pourquoi l'idée est tenace

Parce que chacun connaît, ou croit connaître, quelqu'un qui « profite ». Et parce que le discours politique l'entretient : de la promesse de « traverser la rue » pour trouver un emploi aux réformes successives présentées comme des incitations à reprendre le travail, l'idée que le chômage serait d'abord un problème de volonté individuelle revient sans cesse.

### Le vrai débat

Le chômage de masse tient d'abord au **nombre d'emplois disponibles**, à leur qualité et à leur localisation. Les vraies questions sont donc :

- **Les métiers en tension** : pourquoi certains postes ne trouvent pas preneur (salaires, horaires, pénibilité, logement, transport).
- **La formation** : faire correspondre les compétences des chômeurs aux besoins des entreprises.
- **Le non-recours** : des centaines de milliers de personnes renoncent à des droits pour lesquels elles ont cotisé.

> **Attention, interprétation.** Les réformes de 2019 et 2023 ont été défendues comme des incitations à reprendre un emploi. Leurs effets réels sur le retour à l'emploi sont encore débattus : l'Unédic et la Dares publient des évaluations régulières, à suivre.
