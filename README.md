# 🎮 PGRG IA — Jeux éducatifs gratuits pour enfants (5–12 ans)

**65 jeux éducatifs**, **100 % gratuits**, **sans publicité**, **sans pistage**, **100 % hors-ligne**, **bilingues Français + Anglais**, jouables sur **ordinateur et mobile**.

Une initiative de **[PGRG IA](https://ia.pgrg.ca)** — Trois-Rivières, Québec.

---

## ▶️ Comment jouer

Ouvre **`website/index.html`** dans un navigateur : c'est le **portail** qui liste les 65 jeux, avec filtres par **âge** et par **matière**, et bascule **FR/EN**.

Chaque jeu est aussi jouable seul : ouvre `games/<nom-du-jeu>/index.html`.

> Tout fonctionne **hors-ligne** (aucune connexion requise) et **sans installation**.

---

## 📦 Les 65 jeux

10 domaines : **Maths · Lecture · Anglais · Sciences · Géographie & Histoire · Logique & Code · Mémoire & Attention · Arts & Musique · Émotions & Vie pratique**.

Chaque jeu : un seul fichier `index.html` autonome (graphismes SVG, sons WebAudio, voix via le navigateur), progression sauvegardée **en local** (aucune donnée envoyée), couleurs et logo **PGRG**.

Catalogue détaillé : **`docs/01_CATALOGUE_DE_JEUX.md`**.

---

## 🗂️ Structure du dépôt

```
JeuxEducatifs/
├── website/        → le portail (hub) qui liste tous les jeux  ← OUVRE CECI
├── games/          → les 65 jeux (un dossier index.html par jeu)
├── brand/          → logo + mascotte PGRG
├── shared/         → charte (brand.css) et notes du moteur commun
├── docs/           → le plan complet (12 documents)
├── prompts/        → prompts Gemini / agents (pour produire d'autres jeux)
└── assets/         → banque d'assets
```

---

## ✅ Principes (non négociables)

- **Zéro publicité. Zéro pistage. Zéro collecte de données.**
- **Gratuit pour toujours.**
- **Bilingue FR + EN** sur chaque jeu.
- **Hors-ligne** et **sans compte**.
- **Sûr pour les enfants** : aucun lien sortant, ton bienveillant, échecs non punitifs.
- **Accessible** : grandes cibles, fort contraste, pas de flash, jouable sans lecture pour les plus jeunes.

---

## 🌐 Publier (prochaines étapes)

1. **GitHub** : pousser ce dossier tel quel (tout est statique).
2. **Web gratuit** : Cloudflare Pages / GitHub Pages → un lien public (le portail = `website/index.html`, ou place son contenu à la racine).
3. **Applications téléchargeables** : à venir via GitHub Actions (empaquetage PWA → Android/desktop).

> Note licence : le **code** des jeux peut être publié sous licence libre (ex. MIT). Le **logo et la mascotte PGRG** restent la propriété de PGRG et ne sont pas couverts par cette licence.

---

*65 jeux construits et vérifiés (JS valide, 100 % hors-ligne). Voir `docs/00_PLAN_MAITRE.md` pour la vision complète.*
