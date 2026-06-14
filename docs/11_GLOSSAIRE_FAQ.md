# 11 — GLOSSAIRE & FAQ

---

## Glossaire (les mots techniques en clair)

- **HTML5 / Web** : les technologies des pages web. Ici, on les utilise pour faire des jeux qui marchent dans n'importe quel navigateur.
- **Phaser 4** : le « moteur » gratuit qui sert à fabriquer nos jeux 2D (gère images, animations, clics…).
- **KAPLAY / PixiJS** : autres moteurs web ; KAPLAY pour les jeux très simples, PixiJS pour l'affichage très riche.
- **PWA (Progressive Web App)** : un site web qui s'installe comme une appli (icône sur le téléphone) et marche **hors-ligne**.
- **TWA (Trusted Web Activity)** : la technique pour mettre une PWA sur **Google Play** (appli Android).
- **Capacitor** : l'outil pour emballer notre jeu web en **appli iPhone/iPad** (et Android).
- **Sprite** : une image d'un élément de jeu (personnage, objet) qu'on anime/déplace.
- **Asset** : tout fichier de contenu (image, son, police).
- **i18n** : « internationalisation » — le système qui permet d'avoir le jeu en **FR et EN**.
- **localStorage** : petite mémoire **dans le navigateur** où on garde la progression, **sans serveur**.
- **Service worker** : le bout de code qui fait marcher le jeu **hors-ligne**.
- **CDN** : réseau de serveurs qui distribue le site **vite** partout dans le monde (Cloudflare).
- **SEO** : optimisation pour apparaître dans **Google**.
- **ASO** : la même idée, mais pour les **magasins d'applis**.
- **WCAG** : les règles d'**accessibilité** (pour que tous les enfants puissent jouer).
- **COPPA / RGPD-K** : lois qui protègent les **données des enfants** (US / Europe).
- **MVP** : « produit minimum viable » — la première petite version vraiment utilisable (nos 5 jeux phares).
- **Slug** : le nom de dossier court d'un jeu (ex. `05-multiplication-galaxie`).
- **Open source** : code ouvert que d'autres peuvent lire et améliorer.
- **Antigravity** : l'atelier de Google où des agents IA (Gemini) **construisent l'appli** à partir de tes consignes.
- **Nano Banana** : la génération d'**images** de Gemini (pour nos visuels).

---

## FAQ

**Dois-je savoir coder ?**
Non. Tu **diriges** ; l'IA (Claude / Antigravity) code. Tu choisis les jeux, valides, publies.

**Combien ça coûte ?**
Quasi rien : hébergement gratuit (Cloudflare), ~10–15 €/an de domaine (optionnel), 25 $ une fois pour Android, ~99 $/an pour iOS (plus tard, optionnel). Voir `06`.

**Combien de temps pour un jeu ?**
En rythme rodé : **1 à 2 jeux par semaine**. Le moteur commun et le gabarit évitent de tout refaire.

**Faut-il un serveur / une base de données ?**
Non. Tout est **statique** et stocké **en local**. C'est gratuit, sûr, et conforme aux lois enfants.

**Comment on joue sur mobile sans installer d'appli ?**
On ouvre le **lien** dans le navigateur du téléphone : ça marche tout de suite. On peut aussi « ajouter à l'écran d'accueil » (PWA).

**Et l'appli iPhone ?**
Possible via **Capacitor** + compte Apple (~99 $/an). À faire **plus tard**, quand l'audience le justifie.

**Comment garder tout ça vraiment gratuit ?**
Coûts proches de zéro + soutien **volontaire** (dons), subventions, partenariats écoles. **Jamais** de pub ni de vente de données. Voir `06`.

**Comment les parents vont me trouver ?**
SEO du portail, magasins d'applis, communautés de parents/enseignants, bouche-à-oreille. Ton atout : « **vraiment gratuit, vraiment sûr** ». Voir `08`.

**Que se passe-t-il si un jeu a un bug ?**
On corrige et on redéploie en quelques minutes (site statique). Pas de risque pour les données : il n'y en a pas.

**Comment ajouter une langue (au-delà de FR/EN) ?**
On ajoute un fichier de traductions (`xx.json`) ; la communauté peut aider. Le système i18n est prévu pour ça.

**Puis-je en faire un vrai projet sérieux plus tard ?**
Oui : structure à but non lucratif, espace enseignants, plus de langues, comptes facultatifs. La base technique le permet déjà. Voir `07`.

**Par où je commence concrètement, là, maintenant ?**
1) Valider nom + mascotte (`09`). 2) Générer logo + mascotte (Gemini). 3) Construire le `_TEMPLATE`. 4) Faire le 1er jeu (*Course aux Nombres*). 5) Le mettre en ligne. Voir `07` et `10`.

---
*Document 11 — Glossaire & FAQ. Retour au plan : `00_PLAN_MAITRE.md`.*
