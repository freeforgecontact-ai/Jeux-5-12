# 02 — ARCHITECTURE TECHNIQUE

Comment construire **un seul jeu** et en tirer **deux versions** (ordinateur + mobile), gratuitement et durablement.

---

## 1. Principe directeur : « Web d'abord »

On code chaque jeu en **technologies web** (HTML5 + JavaScript). C'est le seul choix qui coche toutes tes cases :

| Exigence de Nathan | Pourquoi le web y répond |
|---|---|
| Jouable sur **PC ET mobile** | Un navigateur existe sur les deux ; même code partout |
| **Gratuit** à héberger | Hébergement statique gratuit et illimité (Cloudflare Pages) |
| **Sans installation** | On clique sur un lien et on joue |
| **2 versions (web + appli)** | La même base web s'empaquette en appli Android/iOS |
| **Sans pub / sans pistage** | Tout en local, aucun serveur à nourrir |
| Produit **par l'IA** | Antigravity et Claude excellent en code web |

## 2. La pile technique (stack)

- **Langage** : JavaScript (option TypeScript pour les gros jeux).
- **Moteur de jeu principal : Phaser 4.1** *(stable, sorti le 30 avril 2026)* — moteur HTML5 gratuit et open source, rendu WebGL/Canvas, pensé pour le web desktop et mobile. Refonte du moteur de rendu : très rapide, idéal pour de nombreux jeux 2D.
- **Jeux très simples** : HTML/Canvas « vanilla » ou **KAPLAY** (API ultra simple, parfait pour les mini-jeux et l'apprentissage).
- **Rendu lourd / nombreux sprites** : **PixiJS** (moteur de rendu 2D WebGL/WebGPU).
- **PWA** (Progressive Web App) : manifeste + service worker pour l'installation et le hors-ligne.
- **Empaquetage mobile** : **PWABuilder / Bubblewrap** (Android, via TWA) et **Capacitor** (iOS + Android natif).
- **Hébergement** : **Cloudflare Pages** (bande passante illimitée, CDN mondial, gratuit). Alternatives : GitHub Pages, Netlify.
- **Outils** : Google **Antigravity** (construction par agents IA), VS Code, Node.js, Git.

> Règle : **un moteur standard pour tout le catalogue** (Phaser 4). La cohérence accélère la production et renforce la marque. KAPLAY/vanilla seulement pour les jeux les plus simples.

## 3. La stratégie « 2 versions » expliquée

Une seule base de code → **deux livrables** :

**Version 1 — Web / PWA (la principale).**
- Jouable instantanément dans le navigateur, sur PC et mobile.
- « Installable » sur mobile (icône sur l'écran d'accueil) sans passer par un store.
- Fonctionne **hors-ligne** une fois chargée (service worker).
- C'est la version qui sera la plus utilisée et la plus facile à partager (un simple lien).

**Version 2 — Applications (Android / iOS, le bonus crédibilité).**
- **Android** : on empaquette la PWA avec **PWABuilder/Bubblewrap** en **TWA** (Trusted Web Activity). Coût : **25 $ une seule fois** (compte Google Play). Exige un score Lighthouse ≥ 80 et la vérification du domaine (Digital Asset Links).
- **iOS** : on enveloppe avec **Capacitor**. Coût : **~99 $/an** (compte Apple Developer) — à faire quand le projet a de la traction.
- Avantage : visibilité dans les stores = les parents te trouvent là où ils cherchent des applis pour enfants.

> Recommandation : **lancer en Web/PWA d'abord** (coût 0 €), ajouter **Android** une fois 5–10 jeux prêts, puis **iOS** quand l'audience le justifie.

## 4. Structure du code (monorepo)

```
D:\JeuxEducatifs\
├── shared\                 # CODE COMMUN À TOUS LES JEUX
│   ├── engine\             # boucle de jeu, scènes, scaling responsive, sauvegarde locale
│   ├── i18n\               # système bilingue FR/EN + chaînes communes
│   ├── ui\                 # boutons, menus, barre de progression, sélecteur de langue
│   └── audio\              # gestion du son (effets, musique, muet)
├── games\
│   ├── _TEMPLATE\          # gabarit : on duplique pour créer un nouveau jeu
│   │   ├── index.html
│   │   ├── src\            # logique du jeu
│   │   ├── assets\         # images/sons propres au jeu
│   │   └── i18n\           # textes FR + EN du jeu
│   ├── 01-course-aux-nombres\
│   ├── 05-multiplication-galaxie\
│   └── ...                 # un dossier par jeu (slug = numéro-nom)
├── website\                # le PORTAIL (hub) qui liste et lance tous les jeux
├── assets\                 # banque d'assets bruts générés (avant intégration)
└── build\                  # sorties prêtes à publier (web / android / ios)
```

## 5. Le moteur commun (`shared/engine`)

Ce qui est codé **une fois** et réutilisé par **tous** les jeux :
- **Mise à l'échelle responsive** : s'adapte à tout écran (téléphone, tablette, PC), gère l'orientation.
- **Entrées unifiées** : tactile **et** souris/clavier traités pareil (zones cliquables ≥ 48 px, pensé doigts d'enfant).
- **Sauvegarde locale** : progression stockée dans le navigateur (`localStorage`) — **aucun compte, aucun serveur**.
- **Audio** : sons d'effets et musique douce, bouton muet toujours visible.
- **Système de scènes** : écran-titre → jeu → réussite, avec transitions douces.
- **Bascule de langue** FR ⇄ EN à chaud (voir §6).
- **Composants UI communs** : bouton retour, aide, étoiles de progression, paramètres.

> Conséquence : créer un nouveau jeu = surtout coder **sa logique propre**, le reste est déjà là. C'est ce qui rend la production en série possible.

## 6. Bilingue FR + EN (i18n)

- Chaque jeu range ses textes dans `i18n/fr.json` et `i18n/en.json` (mêmes clés, deux langues).
- Aucune phrase « en dur » dans le code : on appelle `t("cle")`.
- **Sélecteur de langue** visible (drapeau/texte) ; choix mémorisé en local.
- Pour les très jeunes : **voix off** dans les deux langues (les enfants ne lisent pas encore).
- Détection automatique de la langue du navigateur au premier lancement, modifiable à tout moment.

## 7. Mobile-first & accessibilité technique

- Conception **mobile d'abord** (le plus contraint), puis montée vers le PC.
- Cibles tactiles généreuses, pas de double-tap-zoom accidentel, pas de gestes complexes.
- Polices lisibles et grandes ; option police adaptée à la dyslexie (voir `05`).
- Contrastes élevés ; ne jamais coder une info uniquement par la couleur (daltonisme).
- Tout jouable **sans son** (sous-titres/indices visuels) et **sans lecture** pour les 5–7 ans (audio + icônes).

## 8. Hors-ligne & performance

- **Service worker** : après le 1er chargement, le jeu marche sans connexion.
- **Manifeste PWA** : nom, icône, couleurs, mode plein écran.
- Assets optimisés (atlas de sprites, images compressées, audio léger) ; **objectif de poids : < 5 Mo par jeu** quand c'est possible.
- Chargement progressif (on n'attend pas tout pour commencer à jouer).

## 9. Pas de serveur (au début) = gratuit, sûr, simple

- Tout est **statique** : fichiers HTML/JS/images servis par un CDN gratuit.
- Aucune base de données, aucun compte, aucune donnée personnelle → **conformité enfant par conception** (voir `05`).
- Évolution future possible : comptes **facultatifs** pour synchroniser la progression entre appareils — uniquement si demandé, et en respectant la vie privée.

## 10. Conventions

- **Slug de jeu** : `NN-nom-en-minuscules` (ex. `05-multiplication-galaxie`).
- **Versionnage** : Git, un commit par étape ; tag de version à chaque publication.
- **Checklist de sortie** (avant publication d'un jeu) : FR+EN OK · tactile+souris OK · hors-ligne OK · son coupable · sans lien sortant · testé sur 1 mobile + 1 PC · poids < 5 Mo.

---
*Document 02 — Architecture. Voir `10_WORKFLOW_PRODUCTION.md` (fabriquer un jeu) et `04_PIPELINE_ASSETS.md` (images/sons).*
