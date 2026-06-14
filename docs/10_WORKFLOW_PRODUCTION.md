# 10 — WORKFLOW DE PRODUCTION (fabriquer un jeu)

La méthode concrète pour transformer une ligne du catalogue en **jeu fini, bilingue, publié** — toi en direction, l'IA en production.

---

## 1. Qui fait quoi (rappel)

- **Toi (Nathan)** : choisis le jeu, remplis sa fiche, valides les choix, publies.
- **Claude (Cowork) / Antigravity** : codent le jeu à partir de la fiche et du `_TEMPLATE`.
- **Gemini** : génère les images.
- **Toi + IA** : traduction FR/EN, tests, publication.

## 2. Les 8 étapes d'un jeu

**Étape 1 — Choisir & spécifier.**
Prends un jeu du `01_CATALOGUE_DE_JEUX.md`. Crée `games/<slug>/GAME.md` à partir du modèle (§4) et remplis-le.

**Étape 2 — Cadrer la pédagogie (5 questions de `03`).**
Compétence visée ? Comment on la pratique en jouant ? Montée de difficulté ? Feedback ? Critère de maîtrise ? → écris-les dans `GAME.md`.

**Étape 3 — Concevoir la boucle de jeu.**
Décris les **écrans** (titre → jeu → réussite) et la **boucle** (ce que l'enfant fait en boucle), les niveaux, les récompenses douces. Reste **simple** : un bon mini-jeu vaut mieux qu'un gros jeu confus.

**Étape 4 — Générer les assets.**
Liste les visuels nécessaires (personnage, décor, icônes…). Utilise les prompts de `prompts/images/` (avec le préfixe de style). Génère → détoure → optimise → range dans `games/<slug>/assets/`.

**Étape 5 — Construire le code.**
Duplique `_TEMPLATE`. Donne à **Antigravity** ou à **Claude** : la fiche `GAME.md`, le `_TEMPLATE`, la charte. Utilise le prompt de `prompts/games/`. L'IA code la **logique propre** ; le reste vient du moteur commun.

**Étape 6 — Bilingue FR + EN.**
Remplis `i18n/fr.json` et `i18n/en.json` (mêmes clés). Pour les 5–7 ans, prévois la **voix off**. Relis les deux langues.

**Étape 7 — Tester & valider.**
Teste sur **un mobile** et **un PC**. Passe la **checklist de sortie** (`02` §10) + la **checklist conformité** (`05` §8). Corrige.

**Étape 8 — Publier & annoncer.**
Déploie sur Cloudflare Pages, ajoute la **page du jeu** au portail (SEO, FR+EN), annonce dans 1–2 communautés. Coche la case dans `07_ROADMAP.md`.

## 3. Définition de « fini » (Definition of Done)

Un jeu n'est **publié** que si :
- ✅ il atteint son **objectif pédagogique** (la compétence se pratique vraiment) ;
- ✅ **bilingue** FR + EN, relu ;
- ✅ jouable **tactile + souris**, **mobile + PC** ;
- ✅ **hors-ligne** OK, **son coupable**, **sans lien sortant** ;
- ✅ **accessible** (contraste, pas de flash, jouable sans lecture pour les petits) ;
- ✅ **léger** (< 5 Mo si possible) ;
- ✅ checklists sortie + conformité **validées**.

## 4. Modèle de fiche de jeu (`games/<slug>/GAME.md`)

```markdown
# <Numéro>. <Nom FR> — <Nom EN>

- **Âge** : 
- **Domaine** : 
- **Compétence visée (1 seule)** : 
- **Complexité** : ★ / ★★ / ★★★

## Pédagogie (les 5 questions)
1. Compétence précise : 
2. Comment on la pratique en jouant : 
3. Montée de difficulté (les marches) : 
4. Feedback réussite / erreur : 
5. Critère de maîtrise → déblocage : 

## Boucle de jeu
- Écrans : titre → jeu → réussite
- Ce que l'enfant fait en boucle : 
- Niveaux / progression : 
- Récompenses (douces) : 

## Assets nécessaires
- Personnages : 
- Décors : 
- UI / icônes : 
- Sons : 

## Textes (clés i18n principales)
- titre, consigne, encouragement, réussite, aide…

## Notes techniques
- Spécificités, contrôles, contraintes
```

## 5. Bien travailler avec l'IA (astuces)

- **Itère petit** : un écran qui marche, puis on enrichit. Évite le « tout d'un coup ».
- **Teste souvent** : après chaque ajout, vérifie sur mobile + PC.
- **Donne du contexte** : joins toujours `GAME.md`, la charte et un exemple de jeu déjà fait.
- **Réutilise** : copie un jeu proche déjà réussi plutôt que repartir de zéro.
- **Garde une trace** : un commit Git par étape ; note les décisions dans `GAME.md`.

## 6. Le premier jeu, pas à pas (exemple : *Course aux Nombres*)

1. `games/01-course-aux-nombres/GAME.md` rempli (compétence : addition/soustraction simples).
2. Assets : personnage Lumi, ligne numérique, fond, icônes (Gemini).
3. Boucle : une opération s'affiche → l'enfant choisit le bon nombre → le personnage avance d'une case → arrivée → félicitations.
4. Difficulté : nombres ≤ 10, puis ≤ 20, puis additions/soustractions mêlées.
5. FR/EN + voix off des consignes.
6. Tests + checklists.
7. Publication + page portail + annonce. 🎉

---
*Document 10 — Workflow. Prompts prêts : `prompts/games/`. Gabarit : `games/_TEMPLATE/`.*
