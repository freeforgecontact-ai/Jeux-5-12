# 07 — ROADMAP (du 1er jeu aux 65)

Un plan par paliers. Chaque palier livre quelque chose de **fini et publié** — on n'attend jamais « la fin » pour avoir des résultats.

> Les durées supposent un rythme régulier avec l'IA (toi en direction, Claude/Antigravity en production). Adapte à ton temps réel : le projet avance **un jeu à la fois**.

---

## Vue d'ensemble

| Phase | Durée indicative | Objectif | Livrable |
|---|---|---|---|
| **0. Fondations** | Semaines 1–2 | Marque + moteur commun + gabarit | Tout est prêt à produire |
| **1. MVP** | Semaines 3–6 | 5 jeux phares très soignés | Premiers jeux en ligne (web) |
| **2. Lancement** | Mois 2–3 | Portail public + appli Android | Visible par le public |
| **3. Mise à l'échelle** | Mois 3–9 | 2–4 jeux/mois | 30–40 jeux + iOS |
| **4. Référence** | Mois 9–18 | Catalogue complet + extras | 65 jeux, espace parent/école |

---

## Phase 0 — Fondations (Semaines 1–2)

**But : ne plus jamais repartir de zéro pour un jeu.**
- [ ] Choisir **nom + mascotte + charte** (`09_CHARTE_GRAPHIQUE.md`).
- [ ] Générer **logo + mascotte + 1er pack d'assets** (Gemini, `prompts/images/`).
- [ ] Construire le **moteur commun** (`shared/` : scaling, sauvegarde locale, audio, UI, bascule FR/EN).
- [ ] Construire le **`_TEMPLATE`** (un jeu vide qui marche déjà : titre → jeu → réussite, bilingue).
- [ ] Mettre en place **Git** + **Cloudflare Pages** (déploiement automatique).
- [ ] Portail **hub minimal** (page qui listera les jeux).

**Fait quand** : on peut dupliquer `_TEMPLATE`, coder une logique, et publier en ligne en quelques clics.

## Phase 1 — MVP (Semaines 3–6)

**But : prouver la qualité avec 5 jeux phares (un par grande matière).**
- [ ] **#1 Course aux Nombres** (maths) — le plus simple, rode le pipeline.
- [ ] **#5 Multiplication Galaxie** (maths/arcade).
- [ ] **#14 L'Usine à Syllabes** (lecture).
- [ ] **#29 Le Petit Jardinier** (sciences).
- [ ] **#46 Robot Codeur** (logique/code).
- [ ] Chaque jeu : bilingue, testé mobile **et** PC, checklist de sortie validée.
- [ ] Mise en ligne web (PWA installable).

**Fait quand** : 5 jeux soignés jouables en ligne, tu es fier de les montrer.

## Phase 2 — Lancement public (Mois 2–3)

**But : être trouvable et installable.**
- [ ] **Portail public** fini (catalogue, filtres par âge/matière, page parents).
- [ ] **Politique de confidentialité** + page « Financement » + porte parentale.
- [ ] **Appli Android** (PWABuilder/TWA, compte Google Play 25 $).
- [ ] **SEO** de base + fiches de chaque jeu (`08_LANCEMENT_MARKETING.md`).
- [ ] Premiers posts dans des **communautés de parents/enseignants**.
- [ ] Ajouter **5–8 jeux ★ simples** (vague 2) pour étoffer.

**Fait quand** : n'importe quel parent peut trouver le site, jouer, et installer l'appli.

## Phase 3 — Mise à l'échelle (Mois 3–9)

**But : production en série.**
- [ ] Rythme cible **2–4 nouveaux jeux/mois** → atteindre **30–40 jeux**.
- [ ] Couvrir toutes les matières et toutes les tranches d'âge.
- [ ] **Appli iOS** (Capacitor, compte Apple) quand l'audience le justifie.
- [ ] Boucle d'amélioration : retours des parents → ajustements.
- [ ] Progression locale + collections (motivation) ; **espace parent**.

**Fait quand** : la ludothèque est déjà riche et reconnue dans quelques communautés.

## Phase 4 — Référence (Mois 9–18)

**But : devenir LA référence.**
- [ ] Compléter à **65 jeux** (puis idées futures).
- [ ] **Espace enseignants** (fiches compétences, mode classe).
- [ ] **Accessibilité avancée** (audit WCAG, police dyslexie partout, plus de voix off).
- [ ] Plus de **langues** (au-delà de FR/EN) via la communauté.
- [ ] Comptes **facultatifs** pour synchroniser la progression (en respectant la vie privée).
- [ ] Structure **à but non lucratif** pour pérenniser la mission.

**Fait quand** : les parents s'échangent ton nom comme « la » bonne adresse.

---

## Cadence hebdomadaire type (en rythme de croisière)

1. **Choisir** le jeu de la semaine (dans le catalogue) et remplir sa fiche `GAME.md`.
2. **Générer les assets** (Gemini) à partir des prompts.
3. **Construire** le jeu (Antigravity ou Claude) sur la base du `_TEMPLATE`.
4. **Traduire** FR ⇄ EN + relire.
5. **Tester** (mobile + PC) et passer la **checklist de sortie**.
6. **Publier** + ajouter au portail + annoncer.

> 1 semaine bien rodée ≈ 1 à 2 jeux. C'est ainsi qu'on atteint 65 sans s'épuiser.

---
*Document 07 — Roadmap. Le « comment » détaillé d'un jeu : `10_WORKFLOW_PRODUCTION.md`.*
