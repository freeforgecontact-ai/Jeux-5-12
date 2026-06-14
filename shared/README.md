# shared/ — Moteur & composants communs

Le code **partagé par tous les jeux** (à construire en Phase 0, voir `docs/07`).

- `engine/` — boucle de jeu, scènes, mise à l'échelle responsive (PC/mobile), sauvegarde locale (localStorage), entrées tactile+souris.
- `i18n/` — système bilingue FR/EN + chaînes communes.
- `ui/` — boutons, menus, barre de progression, sélecteur de langue, bouton son, bouton retour.
- `audio/` — gestion des effets et de la musique (avec bouton muet).

> But : ne coder qu'**une fois** ce qui est commun, pour fabriquer chaque jeu vite et de façon cohérente. Voir `docs/02_ARCHITECTURE_TECHNIQUE.md`.
