# 00 — PLAN MAÎTRE
### Lumio : la plus grande ludothèque éducative gratuite pour les 5–12 ans

---

## 1. Vision

> Devenir **la référence** des jeux éducatifs gratuits pour enfants — au point que les parents se passent le nom de bouche à oreille : « Pour que ton enfant apprenne en s'amusant, va sur Lumio. »

On ne vend rien. On ne piste personne. On ne montre aucune publicité. On offre une chose rare : **des dizaines de jeux de grande qualité qui rendent vraiment les enfants plus curieux, plus habiles et plus confiants**, accessibles partout et gratuitement.

## 2. Mission

Concevoir, produire et publier **au moins 65 jeux éducatifs** (objectif extensible à 100+), chacun :
- ciblant une **compétence précise** (calcul, lecture, logique, science, créativité, émotions…) ;
- **bilingue français + anglais** ;
- jouable **sur ordinateur et sur mobile** (2 versions : navigateur + application) ;
- **gratuit, sans pub, sans collecte de données, sans achat intégré**.

## 3. L'objectif de Nathan, traduit en stratégie

Tu veux que **« tous les parents viennent te voir »**. Ça ne s'achète pas avec de la pub — ça se gagne avec **la confiance** et **la qualité**. Trois leviers concrets, développés dans les autres documents :

1. **Quantité + Qualité** → une ludothèque assez large pour couvrir tous les âges et toutes les matières (un enfant peut y rester des années), avec un niveau de finition qui inspire confiance. *(voir `01_CATALOGUE_DE_JEUX.md`)*
2. **Confiance absolue des parents** → le « 100 % gratuit, sans pub, sans pistage » devient ton argument n°1. Aujourd'hui c'est ultra rare et très recherché. *(voir `05_CONFORMITE_SECURITE.md` et `06_MODELE_GRATUIT.md`)*
3. **Découvrabilité** → être trouvable par les parents et les enseignants (recherche Google, magasins d'applis, bouche-à-oreille, communautés). *(voir `08_LANCEMENT_MARKETING.md`)*

## 4. Définition du succès (KPIs d'un projet gratuit)

Comme on ne vend rien, le succès ne se mesure pas en chiffre d'affaires mais en **impact et réputation** :

| Indicateur | Cible 12 mois | Cible 24 mois |
|---|---|---|
| Jeux publiés | 20 | 65 |
| Enfants actifs / mois | 5 000 | 100 000 |
| Note moyenne (stores / avis) | ≥ 4,6 / 5 | ≥ 4,7 / 5 |
| Recommandations spontanées (parents/écoles) | premières | régulières |
| Temps d'apprentissage cumulé | — | « X millions de minutes apprises » |
| Coût d'hébergement | ≈ 0 € | < 20 €/mois |

> Le vrai KPI : **« est-ce qu'un parent recommanderait ça à un autre parent ? »** Tout le reste en découle.

## 5. Les 6 piliers stratégiques

1. **Pédagogie d'abord.** Chaque jeu part d'un objectif d'apprentissage, pas d'une idée de gameplay. La science encadre le design (motivation intrinsèque, étayage progressif, feedback immédiat, droit à l'erreur). *(→ `03_PEDAGOGIE.md`)*
2. **Gratuité durable.** Coûts proches de zéro (hébergement statique illimité), financement par dons/soutien volontaire et subventions — jamais par la pub ou la revente de données. *(→ `06_MODELE_GRATUIT.md`)*
3. **Multiplateforme par conception.** On construit en technologies web (HTML5 + Phaser 4) : un seul code, deux livrables — site web instantané **et** applications Android/iOS. *(→ `02_ARCHITECTURE_TECHNIQUE.md`)*
4. **Quantité ET qualité, grâce à l'IA.** Tu diriges, l'IA produit. Un moteur et des composants communs permettent de sortir un jeu de qualité en jours, pas en mois. *(→ `10_WORKFLOW_PRODUCTION.md`)*
5. **Confiance et sécurité.** Conformité RGPD-K / COPPA par le principe le plus simple : **ne rien collecter**. Interface sûre pour enfants, accessible (dyslexie, daltonisme). *(→ `05_CONFORMITE_SECURITE.md`)*
6. **Découvrabilité.** Un portail unique (le « hub »), optimisé pour la recherche, présent sur les stores et dans les communautés de parents et d'enseignants. *(→ `08_LANCEMENT_MARKETING.md`)*

## 6. Le modèle de production assisté par IA (ta force)

Tu as exactement les bons outils. Voici qui fait quoi :

| Rôle | Qui | Pour quoi |
|---|---|---|
| **Direction / décisions** | **Toi (Nathan)** | choisir les jeux, valider, donner le ton, publier |
| **Construction des jeux (code)** | **Claude (Cowork)** *et/ou* **Google Antigravity** | générer le code Phaser/HTML5 de chaque jeu à partir des specs de ce dossier |
| **Images, logos, décors, sprites** | **Gemini (Nano Banana / Nano Banana Pro)** | générer tous les visuels (voir recettes de prompts) |
| **Sons & musique** | outils audio libres + IA | effets et musiques douces |
| **Traductions FR ⇄ EN** | IA + relecture | textes de chaque jeu dans les deux langues |

> **Antigravity** (Google, gratuit, Windows/Mac/Linux) est un environnement « agent-first » : tu décris ce que tu veux, des agents Gemini codent, testent et préparent l'appli. Couplé à **Gemini pour les images**, tu disposes d'une mini-usine à jeux. Ce dossier lui fournit les **specs** ; voir `prompts/games/` pour des prompts prêts à coller. *(→ `04_PIPELINE_ASSETS.md`, `10_WORKFLOW_PRODUCTION.md`)*

## 7. Vue d'ensemble des phases (détail dans `07_ROADMAP.md`)

- **Phase 0 — Fondations (semaines 1–2).** Marque, moteur commun, modèle de jeu (`_TEMPLATE`), système bilingue, portail minimal.
- **Phase 1 — MVP (semaines 3–6).** 5 jeux phares très soignés (un par grande matière) + mise en ligne web.
- **Phase 2 — Lancement (mois 2–3).** Portail public, empaquetage Android (puis iOS), premières communautés de parents.
- **Phase 3 — Mise à l'échelle (mois 3–9).** Production en série : viser 2–4 jeux/mois jusqu'à 30–40 jeux.
- **Phase 4 — Référence (mois 9–18).** 65 jeux, comptes de progression facultatifs, espace enseignants, accessibilité avancée.

## 8. Le catalogue en bref (détail dans `01_CATALOGUE_DE_JEUX.md`)

**65 jeux** répartis en **10 domaines** : Mathématiques · Lecture & Langue française · Anglais · Sciences & Nature · Géographie/Histoire/Cultures · Logique & Pensée informatique · Mémoire & Attention · Arts & Musique · Émotions & Vie pratique · Défis transversaux. Chaque jeu est décliné pour une tranche d'âge (5–7 / 8–10 / 11–12).

## 9. Pourquoi tes jeux peuvent gagner (différenciateurs)

- **Le vrai « sans pub, sans pistage »** : la plupart des « jeux gratuits pour enfants » vivent de pub ou de données. Toi non. C'est ton avantage moral **et** marketing.
- **Bilingue natif** : deux fois plus de familles touchées (francophones + anglophones).
- **Largeur de catalogue** : un seul endroit pour tous les âges et toutes les matières = les parents reviennent.
- **Qualité cohérente** : moteur et charte communs → tous les jeux se ressemblent en bien (marque forte).
- **Sans installation** : on joue en un clic dans le navigateur ; l'appli est un bonus, pas un obstacle.
- **Production IA** : tu sors plus de jeux, plus vite, qu'un studio classique à budget équivalent (≈ 0 €).

## 10. Risques principaux et parades

| Risque | Parade |
|---|---|
| « Trop de jeux moyens » | Standard de qualité écrit (charte + checklist de sortie), MVP très soigné d'abord |
| Découvrabilité difficile sans budget | SEO du portail, présence stores, communautés enseignants/parents, bouche-à-oreille |
| Financer la gratuité sur la durée | Coûts ≈ 0, dons/soutien volontaire, subventions edtech, transparence totale |
| Conformité enfants (RGPD-K/COPPA) | **Ne rien collecter** : pas de compte obligatoire, pas de pistage, tout en local |
| Dépendance à un seul outil IA | Specs neutres dans ce dossier → constructibles par Claude **ou** Antigravity |
| Fatigue / projet trop gros | Roadmap par paliers, 1 jeu = 1 livrable fini, on avance jeu par jeu |

## 11. Prochaines actions immédiates (cette semaine)

1. **Valider le nom et la mascotte** (`09_CHARTE_GRAPHIQUE.md`).
2. **Choisir le 1er jeu MVP** (recommandé : *Course aux Nombres* — simple, universel, démontre tout le pipeline).
3. **Générer la mascotte + le logo** avec Gemini (`prompts/images/`).
4. **Construire le `_TEMPLATE`** (moteur commun + bascule FR/EN) — base de tous les jeux.
5. **Coder le 1er jeu** (Claude ou Antigravity) et le mettre en ligne sur Cloudflare Pages.

> Tu n'as pas à tout faire d'un coup. Le plan est fait pour avancer **un jeu à la fois**, chacun fini et publié, jusqu'à la ludothèque complète.

---
*Document 00 — Plan maître. Suite logique : `01_CATALOGUE_DE_JEUX.md`.*
