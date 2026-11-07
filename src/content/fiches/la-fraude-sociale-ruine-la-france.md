---
titre: La fraude sociale ruine la France
theme: economie
statut: brouillon
miseAJour: 2026-11-07
variantes:
  - Les fraudeurs aux allocs ruinent la Sécu
  - La fraude aux aides coûte des milliards
  - Les assistés fraudent la CAF
  - Il suffit de lutter contre la fraude pour combler le déficit
  - La fraude sociale c'est pire que la fraude fiscale
  - Les arrêts maladie bidons plombent la Sécu
aVerifier:
  - >-
    Contexte politique : date du plan Attal (29 ou 30 mai 2023 ; le site du
    ministère indique le 30).
  - >-
    Contexte politique : vérifier que François Bayrou était bien Premier
    ministre le 17 juin 2025 (lettre de mission en annexe 1 de la note HCFiPS).
  - >-
    Contexte politique : loi n° 2026-534 du 25 juin 2026 et décision 2026-904 DC
    viennent d'une seule source (Le Monde du droit). Confirmer sur Légifrance et
    ajouter le contenu principal de la loi (mesures visant les allocataires, les
    entreprises, les plateformes).
  - >-
    Contexte politique : vérifier le gouvernement en place au dépôt du texte (14
    octobre 2025) et à la promulgation.
  - >-
    Contexte politique : l'effet du plan Attal (« ses mesures phares visent les
    allocataires ») est une lecture de notre part. La garder seulement si le
    détail du plan la confirme.
  - >-
    Note HCFiPS 2026 : chiffres lus dans le document (p. 8 taux de fraude et 680
    M€ ; p. 10-12 14 Md€, répartition 52/36/12 % et par organisme, IJ 1,8 % ; p.
    16-17 détections et recouvrements). Relire ces pages pour confirmer.
  - >-
    « Environ 5 milliards » (36 % de 14 Md€) et « environ 4 milliards » pour la
    CAF (30 % de 14 Md€) sont **nos calculs**.
  - >-
    « 3 milliards par an » de RSA non versé est **notre calcul** (750 M€ × 4
    trimestres). Vérifier dans le dossier DREES n° 92 que les 750 M€ sont bien
    trimestriels et sur quel champ.
  - >-
    Vérifier l'URL complète du dossier DREES (l'adresse trouvée semble tronquée)
    et la référence de la mise à jour 2026 (Études et Résultats n° 1370).
  - >-
    Fraude fiscale : retrouver le rapport de la Cour des comptes de novembre
    2019 (TVA : 15 Md€) et le rapport du CPO de 2007 (29 à 40 Md€), et remplacer
    les sources secondaires.
  - >-
    « Moins de 5 % » est **notre calcul** : 681 M€ ÷ 14 Md€ ≈ 4,9 %. Attention,
    recouvrement (2024) et évaluation ne portent pas exactement sur les mêmes
    années.
  - >-
    Comparaison fraude fiscale / sociale : les chiffres fiscaux datent de 2007
    et 2019, le chiffre social de 2026. Le dire si on vous le reproche.
  - >-
    Graphique fiscal / social : l'estimation syndicale de 80 à 100 Md€
    (Solidaires Finances publiques, 2018), souvent reprise dans les
    comparaisons, est **volontairement exclue** (source non institutionnelle). À
    rediscuter.
  - >-
    Graphiques en barres : les valeurs sont saisies à la main depuis les
    documents. Les recontrôler (HCFiPS p. 11 ; Cour des comptes 2019 ; CPO
    2007), puis passer `verifie: true`.
  - >-
    « Les sans-papiers n'ont droit à aucune allocation » : la source est dans la
    fiche sur l'immigration (seule l'AME, qui est une couverture santé). Ajouter
    une source ici aussi.
  - >-
    Vérifier dans l'annexe 3 de la note HCFiPS le taux de fraude du RSA (environ
    15 % cité p. 8).
  - >-
    Graphique possible : détections de fraude par organisme de 2018 à 2024
    (graphique n° 4 de la note HCFiPS ; demander ou reconstituer les données).
objections:
  - objection: Les fraudeurs aux allocs coûtent des milliards
    reponse: >
      Elle existe, personne ne dit le contraire : environ **5 milliards
      d'euros**, soit 36 % de la fraude sociale estimée, avec le RSA en tête des
      prestations les plus touchées (environ **15 %**). Mais la fraude aux
      cotisations pèse plus lourd, plus de la moitié du total. Ce qui n'empêche
      pas **trois Français sur quatre** d'être persuadés que beaucoup de gens
      touchent des allocations sans y avoir droit.
    sources:
      - hcfips2026
    barres:
      titre: Qui fraude ? Les 14 milliards de fraude sociale estimée, par origine
      unite: '%'
      barres:
        - libelle: Cotisations non payées
          detail: travail dissimulé · ≈ 7,3 Md€
          valeur: 52
          dont: {}
          source: hcfips2026
          accent: false
        - libelle: Bénéficiaires de prestations
          detail: allocations, RSA, arrêts maladie… · ≈ 5 Md€
          valeur: 36
          dont: {}
          source: hcfips2026
          accent: true
        - libelle: Professionnels de santé
          detail: libéraux, établissements · ≈ 1,7 Md€
          valeur: 12
          dont: {}
          source: hcfips2026
          accent: false
      note: >-
        Parts lues dans la note du HCFiPS (p. 11), montants en milliards
        calculés par nous à partir du total de 14 Md€.
      verifie: false
  - objection: La fraude fiscale, c'est moins grave que la fraude sociale
    reponse: >
      En montants, c'est même plutôt l'inverse. L'État n'a aucune estimation
      officielle récente de la fraude fiscale, que la Cour des comptes juge «
      **mal cernée, mal chiffrée** », mais tous les ordres de grandeur
      disponibles dépassent la fraude sociale : **15 milliards d'euros** pour la
      seule TVA (Cour des comptes, 2019), **29 à 40 milliards** pour l'ensemble
      (Conseil des prélèvements obligatoires, 2007). En face, la fraude sociale,
      elle, est auscultée tous les ans : **14 milliards**, dont environ 5
      milliards pour les bénéficiaires de prestations.
    sources:
      - cdc2019
      - cpo2007
      - hcfips2026
    barres:
      titre: >-
        Fraude sociale et fraude fiscale : les ordres de grandeur, en milliards
        d'euros par an
      unite: Md€
      barres:
        - libelle: Toute la fraude sociale
          detail: cotisations et prestations · estimation 2026
          valeur: 14
          dont:
            valeur: 5
            libelle: >-
              fraude des bénéficiaires de prestations (allocations, RSA, arrêts
              maladie…)
          source: hcfips2026
          accent: true
        - libelle: Fraude à la TVA seule
          detail: estimation 2019
          valeur: 15
          dont: {}
          source: cdc2019
          accent: false
        - libelle: Toute la fraude fiscale
          detail: fourchette · estimation 2007
          valeur: 29
          max: 40
          dont: {}
          source: cpo2007
          accent: false
      note: >-
        Estimations d'années différentes : il n'existe pas d'estimation
        officielle récente de la fraude fiscale totale.
      verifie: false
  - objection: Les arrêts maladie bidons plombent la Sécu
    reponse: >
      L'Assurance maladie a passé au crible **7 000 arrêts de travail** tirés au
      hasard : la fraude y est estimée à **1,8 %**, soit 230 millions d'euros
      par an. Et sur l'ensemble de ses dépenses, **70 % de la fraude** est le
      fait de professionnels de santé et d'établissements. Le salarié en arrêt
      de complaisance fait un coupable bien commode, mais il est loin d'être le
      principal.
    sources:
      - hcfips2026
    barres:
      unite: '%'
      barres: []
      verifie: false
  - objection: Les fraudes détectées explosent, la preuve que ça empire
    reponse: >-
      Les montants détectés ont bien grimpé, de **1,3 à 2 milliards d'euros**
      entre 2022 et 2024. Normal, les caisses contrôlent davantage et ciblent
      mieux, donc elles trouvent plus. Les **taux de fraude**, eux, n'ont
      **quasiment **pas bougé, et la hausse des montants estimés tient à 90 % à
      l'augmentation des sommes versées et à un périmètre d'évaluation élargi.
    sources:
      - hcfips2026
    barres:
      unite: '%'
      barres: []
      verifie: false
  - objection: Ce sont surtout les étrangers qui fraudent
    reponse: >
      Rien ne permet de l'affirmer : les évaluations officielles ne distinguent
      tout simplement pas les fraudeurs selon leur nationalité. Ceux qui le
      prétendent parlent donc sans chiffres. Pour mémoire, les sans-papiers
      n'ont droit à **aucune** allocation (voir la fiche [sur les immigrés et
      les aides](/fiches/les-immigres-viennent-pour-les-aides)).
    sources: []
    barres:
      unite: '%'
      barres: []
      verifie: false
enUnePhrase: >
  On a tous entendu le couplet sur les fraudeurs aux allocs qui mettraient la
  Sécu à genoux. Sauf que les chiffres officiels racontent une tout autre
  histoire : sur les **14 milliards d'euros** de fraude sociale estimés chaque
  année, **plus de la moitié** sont des cotisations jamais versées, la faute au
  travail au noir bien plus qu'aux allocataires. Les taux de fraude restent
  faibles, les contrôles ne ramènent que **680 millions** par an, et pendant
  qu'on s'inquiète du RSA versé à tort, un tiers des foyers qui y ont droit ne
  le demandent même pas.
arguments:
  - chiffre: 52 %
    titre: >-
      de la fraude sociale, c'est du "travail au black". Pas vraiment le
      portrait-robot du fraudeur qu'on nous vend
    constat: >
      Dans sa note de janvier 2026, le Haut Conseil du financement de la
      protection sociale (HCFiPS), chargé d'évaluer chaque année la fraude
      sociale, l'estime à **14 milliards d'euros**. Plus de **52 %** de cette
      somme correspond à des cotisations qui ne sont jamais rentrées dans les
      caisses, essentiellement à cause du travail dissimulé (salariés ou heures
      non déclarés). La fraude des bénéficiaires de prestations pèse **36 %**,
      celle des professionnels de santé **12 %**. Côté organismes, l'Urssaf, qui
      collecte les cotisations, concentre à elle seule la moitié de la fraude
      estimée, devant la CAF (30 %) et l'Assurance maladie (16 %).
    montre: >
      Le fraudeur aux allocs n'est donc qu'un gros tiers de l'histoire. Le
      premier trou dans la caisse, c'est le boulot payé au noir, avec à la clé
      des cotisations en moins pour les retraites, la santé et le chômage. Même
      à l'Assurance maladie, ce ne sont pas les patients qui trichent le plus :
      **70 % de la fraude** y est le fait de professionnels de santé et
      d'établissements.
    sources:
      - hcfips2026
    graphique:
      series: []
      periodeReference: []
      format: decimal
      verifie: false
    barres:
      unite: '%'
      barres: []
      verifie: false
  - chiffre: ≈ 2 %
    titre: >-
      de fraude sur les cotisations. Pour un système « miné », il tient plutôt
      bien
    constat: >
      Selon le HCFiPS, la fraude ne dépasse pas **2 %** des cotisations en
      moyenne, atteint **5 %** sur les prestations familiales et un peu plus de
      **2 %** à l'Assurance maladie, des taux qui bougent à peine d'une
      évaluation à l'autre. Et les fameux arrêts maladie de complaisance ? La
      fraude y est estimée à **1,8 %** des indemnités versées, soit 230 millions
      d'euros.
    montre: >
      Le HCFiPS le reconnaît lui-même, ses évaluations sont « **loin de montrer
      un système de protection sociale miné par la fraude** ». Les vraies zones
      à risque sont ailleurs, du côté des plateformes, où chauffeurs VTC et
      livreurs sous-déclarent **65 à 80 %** de leur activité, et des
      micro-entrepreneurs (plus de 20 %). Le RSA est lui aussi plus exposé, avec
      un taux autour de **15 %**, ce qui justifie des contrôles ciblés plutôt
      qu'un soupçon jeté sur tous les allocataires.
    sources:
      - hcfips2026
    graphique:
      series: []
      periodeReference: []
      format: decimal
      verifie: false
    barres:
      unite: '%'
      barres: []
      verifie: false
  - chiffre: 680 M€
    titre: récupérés en 2024. La chasse aux fraudeurs ne remplira pas les caisses
    constat: >
      En 2024, les caisses de Sécurité sociale ont repéré **2,06 milliards
      d'euros** de fraude, contre 1,3 milliard en 2022, et en ont récupéré **681
      millions**. Les détections grimpent parce que les contrôles sont plus
      nombreux et mieux ciblés, explique le HCFiPS, et non parce que la fraude
      s'envolerait.
    montre: >
      Même en mettant le paquet sur les contrôles, on récupère moins de 5 % des
      14 milliards estimés. « **La fraude n'est pas la cagnotte budgétaire** »
      que certains font miroiter, prévient le HCFiPS. Et les plus difficiles à
      faire payer sont les entreprises fraudeuses, qui peuvent organiser leur
      insolvabilité ou mettre la clé sous la porte : l'Urssaf repère plus de la
      moitié des fraudes mais n'en récupère qu'environ **120 millions d'euros**.
    sources:
      - hcfips2026
    graphique:
      series: []
      periodeReference: []
      format: decimal
      verifie: false
    barres:
      unite: '%'
      barres: []
      verifie: false
  - chiffre: 34 %
    titre: >-
      des foyers éligibles au RSA ne le touchent pas. L'argent qui manque n'est
      pas toujours celui qu'on croit
    constat: >
      D'après la DREES, le service statistique du ministère des Solidarités,
      **un tiers des foyers éligibles au RSA** ne le perçoivent pas chaque
      trimestre (chiffre 2018), et un sur cinq ne le demande jamais. Les sommes
      non versées atteignent environ **750 millions d'euros par trimestre**,
      soit autour de **3 milliards par an**. Une mise à jour publiée en 2026
      trouve un niveau quasi identique, entre **33 et 37 %** fin 2021.
    montre: >
      Méconnaissance du dispositif, démarches décourageantes, peur d'être mal vu
      : des centaines de milliers de foyers pauvres renoncent à une aide à
      laquelle ils ont droit. Pour le seul RSA, environ 3 milliards d'euros
      restent ainsi chaque année dans les caisses, à peine moins que toute la
      fraude estimée à la CAF (autour de 4 milliards).
    sources:
      - drees2022
      - hcfips2026
    graphique:
      series: []
      periodeReference: []
      format: decimal
      verifie: false
    barres:
      unite: '%'
      barres: []
      verifie: false
contexte:
  - date: 30 mai 2023
    acteur: >-
      Gabriel Attal, ministre des Comptes publics (gouvernement d'Élisabeth
      Borne)
    fait: >
      Présentation d'un **plan contre la fraude sociale** : **1 000 agents** de
      contrôle en plus d'ici 2027 (+20 %), fin du versement d'allocations sur
      des comptes bancaires hors d'Europe dès le 1er juillet 2023, et projet de
      fusion de la carte Vitale et de la carte d'identité.
    effet: >
      Le plan se présente comme un volet d'une feuille de route contre « toutes
      les fraudes », mais ses mesures phares visent les allocataires et les
      assurés.
    sources:
      - eco_plan2023
      - senat_plan2023
  - date: 17 juin 2025
    acteur: François Bayrou, Premier ministre
    fait: >
      Il confie au HCFiPS une **mission permanente** de suivi des fraudes
      sociales, avec une évaluation chiffrée chaque année.
    effet: ''
    sources:
      - hcfips2026
  - date: Janvier 2026
    acteur: HCFiPS
    fait: >
      Sa note annuelle évalue la fraude à **14 milliards d'euros**, dont plus de
      la moitié sur les cotisations, et juge le sujet « **survalorisé au plan
      budgétaire** ».
    effet: ''
    sources:
      - hcfips2026
  - date: 25 juin 2026
    acteur: Gouvernement de Sébastien Lecornu et Parlement
    fait: >
      Promulgation de la **loi relative à la lutte contre les fraudes sociales
      et fiscales**, déposée au Sénat en octobre 2025 et validée par le Conseil
      constitutionnel le 18 juin 2026.
    effet: ''
    sources:
      - ldd_loi2026
      - an_dossier2026
liees:
  - les-immigres-viennent-pour-les-aides
  - les-chomeurs-ne-veulent-pas-travailler
approfondir:
  - titre: Note annuelle de suivi et d'évaluation des fraudes sociales
    auteur: HCFiPS
    annee: 2026
    url: >-
      https://www.strategie-plan.gouv.fr/files/files/Publications/2026/2026-01-13%20-%20HCFiPS%20-%20note%20annuelle%20fraude%20sociale/Note%20annuelle%20de%20suivi%20et%20d%27%C3%A9valuation%20des%20fraudes%20sociales%20VF.pdf
    pourquoi: >
      La source officielle : chiffres par organisme, méthode, et **pourquoi la
      perception de la fraude dépasse sa réalité** (pages 6 à 8).
  - titre: Mesurer régulièrement le non-recours au RSA et à la prime d'activité
    auteur: DREES
    annee: 2022
    url: >-
      https://drees.solidarites-sante.gouv.fr/publications-communique-de-presse/les-dossiers-de-la-drees/mesurer-regulierement-le-non-recours-au
    pourquoi: >
      Comment on mesure les aides **non réclamées**, et qui sont les personnes
      concernées.
  - titre: 'Fraude sociale : des pertes importantes sur les cotisations sociales'
    auteur: Vie publique
    annee: 2024
    url: >-
      https://www.vie-publique.fr/en-bref/295552-fraude-sociale-des-pertes-importantes-sur-les-cotisations-sociales
    pourquoi: |
      Résumé accessible du rapport 2024 du HCFiPS.
concepts:
  - terme: Évaluation, détection, recouvrement
    definition: >
      Trois chiffres à ne pas confondre. L'**évaluation** estime statistiquement
      ce qui est fraudé (14 Md€). La **détection** compte la fraude
      effectivement repérée par les contrôles (2 Md€). Le **recouvrement**
      mesure ce qui est réellement récupéré (0,7 Md€).
  - terme: Fraude et erreur
    definition: >
      La **fraude** suppose une intention de tromper. L'**erreur** est
      involontaire (déclaration mal comprise, changement de situation oublié).
      Les chiffres de cette fiche ne comptent que la fraude.
  - terme: Travail dissimulé
    definition: >
      Activité ou salariés non déclarés, en tout ou en partie, pour éviter de
      payer les cotisations sociales. C'est la principale forme de fraude aux
      cotisations.
  - terme: Non-recours
    definition: >
      Situation d'une personne qui a droit à une aide mais ne la demande pas ou
      ne l'obtient pas.
  - terme: HCFiPS
    definition: >
      Haut Conseil du financement de la protection sociale, organisme placé
      auprès du Premier ministre. Il publie chaque année l'évaluation officielle
      de la fraude sociale.
sources:
  - id: hcfips2026
    titre: >-
      Note annuelle de suivi et d'évaluation des fraudes sociales : des fraudes
      évaluées à 14 Md€
    auteur: Haut Conseil du financement de la protection sociale (HCFiPS)
    annee: 2026
    url: >-
      https://www.strategie-plan.gouv.fr/files/files/Publications/2026/2026-01-13%20-%20HCFiPS%20-%20note%20annuelle%20fraude%20sociale/Note%20annuelle%20de%20suivi%20et%20d%27%C3%A9valuation%20des%20fraudes%20sociales%20VF.pdf
    type: rapport-institutionnel
    verifiee: false
  - id: drees2022
    titre: >-
      Mesurer régulièrement le non-recours au RSA et à la prime d'activité :
      méthode et résultats (Les Dossiers de la DREES n° 92)
    auteur: DREES
    annee: 2022
    url: >-
      https://drees.solidarites-sante.gouv.fr/publications-communique-de-presse/les-dossiers-de-la-drees/mesurer-regulierement-le-non-recours-au
    type: statistique-publique
    verifiee: false
  - id: cdc2019
    titre: La fraude aux prélèvements obligatoires (rapport public thématique)
    auteur: Cour des comptes
    annee: 2019
    url: >-
      https://www.ccomptes.fr/fr/publications/la-fraude-aux-prelevements-obligatoires
    type: rapport-institutionnel
    verifiee: false
  - id: cpo2007
    titre: >-
      Le délicat chiffrage de la fraude fiscale (reprend l'estimation du CPO de
      2007)
    auteur: Actu-Juridique
    annee: 2024
    url: >-
      https://www.actu-juridique.fr/fiscalite/fiscal-finances/le-delicat-chiffrage-de-la-fraude-fiscale/
    type: presse
    verifiee: false
  - id: eco_plan2023
    titre: 'Fraude sociale : présentation du plan de lutte'
    auteur: Ministère de l'Économie
    annee: 2023
    url: https://www.economie.gouv.fr/lutte-fraude-sociale-plan-mesures
    type: rapport-institutionnel
    verifiee: false
  - id: senat_plan2023
    titre: >-
      Rapport sur le projet de loi de règlement 2022 : renforcer la lutte contre
      la fraude sociale
    auteur: Sénat
    annee: 2023
    url: https://www.senat.fr/rap/l22-789/l22-7897.html
    type: rapport-institutionnel
    verifiee: false
  - id: an_dossier2026
    titre: >-
      Dossier législatif : projet de loi relatif à la lutte contre les fraudes
      sociales et fiscales
    auteur: Assemblée nationale
    annee: 2026
    url: https://www.assemblee-nationale.fr/dyn/17/dossiers/dlr5l17n52985
    type: rapport-institutionnel
    verifiee: false
  - id: ldd_loi2026
    titre: 'Lutte contre les fraudes sociales et fiscales : publication de la loi'
    auteur: Le Monde du droit
    annee: 2026
    url: >-
      https://www.lemondedudroit.fr/social/276-protection-sociale-cotisations/101172-lutte-contre-les-fraudes-sociales-et-fiscales-publication-de-la-loi.html
    type: presse
    verifiee: true
---

### Pourquoi l'idée est tenace

La fraude sociale préoccupe fortement les Français : selon les sondages cités par le HCFiPS, **trois quarts** pensent que beaucoup de personnes perçoivent des allocations sans y avoir droit, et **plus de 40 %** associent spontanément le mot « fraude » à la Sécurité sociale. Les cas spectaculaires (faux arrêts maladie, fraudes au RSA, centres de santé fictifs) sont très médiatisés, alors que la fraude aux cotisations, plus discrète, l'est beaucoup moins.

### Le vrai débat

Lutter contre la fraude est légitime et les organismes s'y emploient de plus en plus. Mais le HCFiPS souligne que le sujet est **« survalorisé au plan budgétaire »** : même bien combattue, la fraude ne suffira pas à rétablir les comptes sociaux. Le débat utile porte plutôt sur :

- **Les secteurs les plus exposés** : plateformes numériques, micro-entrepreneurs, RSA, certains professionnels de santé.
- **La prévention** plutôt que la seule détection, par exemple le prélèvement des cotisations à la source sur les plateformes.
- **Le non-recours**, qui prive des personnes pauvres d'aides auxquelles elles ont droit.
