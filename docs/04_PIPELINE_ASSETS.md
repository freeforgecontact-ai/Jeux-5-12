# 04 — PIPELINE DE CRÉATION (images, logos, sons, jeux)

Comment produire **tous les visuels et tous les jeux** avec tes outils : **Gemini** (images) et **Google Antigravity** (construction des jeux), plus l'audio.

---

## 1. Qui produit quoi

| Besoin | Outil | Notes |
|---|---|---|
| Mascotte, logos, personnages, décors, icônes, illustrations | **Gemini — Nano Banana 2** (et **Nano Banana Pro** pour le haut de gamme / le texte dans l'image) | ton abonnement Gemini |
| Construction des jeux (code) | **Google Antigravity** (agents Gemini) **et/ou Claude (moi)** | specs dans ce dossier |
| Sons & musique | bibliothèques libres + IA audio | doux, non agressif |
| Détourage / nettoyage des images | outil de suppression d'arrière-plan | **indispensable** (voir §3) |

## 2. Le style visuel de la marque (à fixer une fois)

Pour que **tous les jeux se ressemblent** (marque forte), on définit un **préfixe de style** réutilisé dans chaque prompt d'image. Proposition (modifiable dans `09_CHARTE_GRAPHIQUE.md`) :

> **Style Lumio** : « illustration vectorielle plate et arrondie, couleurs vives et chaleureuses, contours doux, ombres simples, ambiance joyeuse et rassurante pour enfants, fond uni, style cohérent type livre d'images moderne ».

On colle ce préfixe **devant** chaque demande d'image. Résultat : cohérence garantie.

## 3. ⚠️ Les 2 règles d'or de Gemini pour les jeux

D'après les retours d'expérience récents sur la génération de sprites avec Nano Banana :
1. **Pas de vraie transparence.** Les modèles Gemini ne génèrent pas un fond transparent : demande **un fond uni** (vert ou magenta vif) puis **détoure** avec un outil de suppression d'arrière-plan. C'est une étape obligatoire avant d'intégrer un sprite.
2. **Parler « jeu ».** Mets dans le prompt des mots comme « **game sprite** », « **2D game asset** », « **vue de face/de profil** », « **palette de couleurs limitée** » pour des images propres et exploitables.

## 4. Recettes de prompts (exemples — la liste complète est dans `prompts/images/`)

**Mascotte (luciole « Lumi ») :**
> `[Style Lumio] mascotte de luciole mignonne et souriante, grands yeux amicaux, petite lumière douce sur le ventre, game asset 2D, vue de face, pose accueillante, fond magenta uni pour détourage, palette limitée.`

**Personnage enfant explorateur (réutilisable) :**
> `[Style Lumio] personnage d'enfant explorateur, sac à dos, sourire, game sprite 2D, vue de 3/4, fond vert uni, cohérent pour une série, palette limitée.`

**Décor (jardin pour « Le Petit Jardinier ») :**
> `[Style Lumio] décor de jardin ensoleillé, fond de jeu 2D horizontal, ciel doux, parterres de terre, sans personnage, format paysage 16:9.`

**Icône d'interface (bouton son) :**
> `[Style Lumio] icône de haut-parleur simple et lisible, game UI, fond uni, fort contraste, style plat.`

> Pour la **cohérence d'un personnage** d'une image à l'autre : réutilise la **même image de référence** et décris-le **toujours pareil** ; Nano Banana sait conserver l'apparence d'un personnage entre les scènes.

## 5. Chaîne de production d'un asset (étape par étape)

1. **Prompt** (préfixe de style + sujet + « game asset 2D » + fond uni).
2. **Générer** dans Gemini ; itérer jusqu'au bon rendu.
3. **Détourer** (supprimer le fond uni → PNG transparent).
4. **Recadrer / redimensionner** aux tailles cibles.
5. **Optimiser** (compresser le PNG/WebP, viser léger).
6. **Ranger** dans `assets/<catégorie>/` puis copier dans `games/<slug>/assets/`.

## 6. Conventions de nommage des assets

- `personnage_lumi_face.png`, `decor_jardin_jour.png`, `ui_bouton_son.png`, `logo_lumio_couleur.svg`…
- Catégories : `characters/`, `backgrounds/`, `ui/`, `logos/`, `audio/`.
- Toujours en **minuscules**, sans accents ni espaces (underscores).

## 7. Construire les jeux avec Antigravity

**Antigravity** (Google, gratuit, Windows/Mac/Linux) est un atelier « agent-first » : tu **décris**, des agents Gemini **codent, testent et préparent l'appli**. Pour fabriquer un jeu :
1. Ouvre Antigravity dans le dossier `games/<slug>/`.
2. Colle le **prompt de construction** (modèle prêt dans `prompts/games/`) en y joignant : la fiche du jeu, le moteur commun (`shared/`) et la charte.
3. Laisse les agents générer le code Phaser 4, puis **teste** sur PC et mobile.
4. Intègre les assets Gemini détourés.
5. Vérifie la **checklist de sortie** (`02_ARCHITECTURE_TECHNIQUE.md` §10).

> Tu peux aussi me demander directement (Claude/Cowork) de coder un jeu : je produis le code complet et tu le déposes dans son dossier. Les deux voies utilisent **les mêmes specs** de ce dossier.

## 8. Sons & musique

- **Effets** courts et doux (réussite, clic, ramassage) ; **musique** d'ambiance calme et bouclée, **toujours coupable** (bouton muet visible).
- Sources : bibliothèques de sons libres de droits (vérifie la licence : usage gratuit + commercial + sans attribution si possible) ; ou génération audio par IA.
- Bannir les sons stridents, stressants ou « machine à sous ».

## 9. Logos & identité

- 1 **logo principal** (couleur) + 1 **monochrome** + 1 **icône carrée** (pour PWA/stores, tailles 192 px et 512 px).
- Génère plusieurs pistes avec Gemini, choisis, puis fais vectoriser/nettoyer. Détaille la charte dans `09`.

## 10. Droits & sécurité des assets

- **Pas de personnages/marques existants** (ni Pokémon, ni Disney, etc.) : on crée **nos** personnages → 100 % libres d'usage.
- Vérifie les **conditions d'utilisation** de Gemini pour l'usage commercial/diffusion des images générées.
- Assets **inclusifs** (diversité des personnages) et **non effrayants** (voir `05`).
- **Accessibilité** dès l'asset : fort contraste, formes lisibles, ne pas coder une info que par la couleur.

---
*Document 04 — Pipeline. Prompts prêts : `prompts/images/` et `prompts/games/`. Voir aussi `09_CHARTE_GRAPHIQUE.md`.*
