# _TEMPLATE — Gabarit de jeu

Point de départ de **chaque** nouveau jeu. On le **duplique**, on le renomme, on le remplit.

## Comment créer un nouveau jeu
1. **Copie** ce dossier `_TEMPLATE` dans `games/` et renomme-le en `NN-nom-du-jeu` (ex. `01-course-aux-nombres`).
2. Remplis **`GAME.md`** (la fiche : pédagogie, boucle de jeu, assets, textes).
3. Mets tes **textes** dans `i18n/fr.json` et `i18n/en.json` (mêmes clés).
4. Mets tes **images/sons** dans `assets/`.
5. Code la **logique** du jeu dans `src/` (avec Antigravity ou Claude — voir `prompts/games/`).
6. Ouvre `index.html` pour **tester** (PC + mobile).
7. Passe la **checklist de sortie** (`docs/02` §10) et **conformité** (`docs/05` §8).
8. **Publie** et ajoute la page au portail.

## Contenu du dossier
- `index.html` — page de lancement (placeholder bilingue qui marche déjà).
- `GAME.md` — la fiche du jeu à remplir.
- `src/` — le code du jeu.
- `assets/` — images et sons du jeu.
- `i18n/` — textes FR + EN.

> Tout jeu réutilise le **moteur commun** de `shared/` (scaling, sauvegarde locale, audio, UI, bascule FR/EN). Tu codes surtout la **logique propre** du jeu.
