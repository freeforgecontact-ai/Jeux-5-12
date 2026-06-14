# PROMPTS IMAGES (Gemini — Nano Banana)

Prompts prêts à coller dans Gemini. **Règles d'or** (voir `docs/04`) :
1. **Fond uni** (vert ou magenta vif) puis **détourer** — Gemini ne fait pas de vraie transparence.
2. Dire « **game asset 2D / game sprite** », « **palette limitée** », préciser la **vue**.
3. Toujours commencer par le **préfixe de style** pour la cohérence.

---

## Préfixe de style (à mettre DEVANT chaque prompt)
> **[STYLE LUMIO]** : illustration vectorielle plate et arrondie, couleurs vives et chaleureuses (jaune #FFC542, turquoise #2EC4B6, corail #FF6B6B, vert #6BCB77), contours doux, ombres simples, ambiance joyeuse et rassurante pour enfants, style livre d'images moderne, cohérent.

---

## Mascotte « Lumi » (luciole)
```
[STYLE LUMIO] mascotte de luciole mignonne et souriante, grands yeux amicaux,
petit ventre lumineux jaune, ailes translucides, game asset 2D, vue de face,
pose accueillante (coucou de la main), fond magenta uni pour détourage, palette limitée.
```
Variantes utiles : `... pose qui félicite (pouce levé)`, `... pose qui réfléchit`, `... pose qui montre quelque chose du doigt`.

## Personnage enfant explorateur (réutilisable, garde la même réf pour la cohérence)
```
[STYLE LUMIO] personnage d'enfant explorateur souriant, sac à dos, casquette,
game sprite 2D, vue de 3/4, corps entier, fond vert uni, conçu pour une série cohérente,
palette limitée.
```

## Décors (fonds de jeu, format paysage 16:9, SANS personnage)
- Jardin (jeu #29) :
```
[STYLE LUMIO] décor de jardin ensoleillé, fond de jeu 2D horizontal 16:9,
ciel doux, parterres de terre, quelques fleurs, sans aucun personnage.
```
- Espace (jeu #5 / #31) :
```
[STYLE LUMIO] décor d'espace doux et joyeux, étoiles et planètes mignonnes,
fond de jeu 2D 16:9, sans personnage.
```
- Salle de classe / labo (jeux sciences) :
```
[STYLE LUMIO] décor de petit laboratoire d'enfant coloré et sûr, fond de jeu 2D 16:9, sans personnage.
```

## Éléments d'interface (UI)
```
[STYLE LUMIO] jeu d'icônes d'interface pour enfants : maison (accueil), haut-parleur (son),
ampoule (aide), flèche retour, étoile (récompense). Game UI, fond uni, fort contraste, style plat, lisibles en petit.
```

## Boutons
```
[STYLE LUMIO] gros bouton arrondi « Jouer », style ludique pour enfants, game UI,
fond uni, ombre douce, très lisible.
```

## Logo
```
[STYLE LUMIO] logo « Lumio » en lettres rondes et joyeuses, le point sur le i remplacé par
une petite luciole lumineuse, sur fond blanc, version horizontale, net et vectoriel.
```
Décliner : `... version icône carrée pour application (512x512)`, `... version monochrome`.

## Cartes à collectionner (récompenses douces, ex. jeux géo/sciences)
```
[STYLE LUMIO] illustration d'un drapeau/animal/planète sur une jolie carte à collectionner
arrondie, game asset 2D, fond uni, palette limitée.
```

---

### Après génération (rappel pipeline `docs/04`)
Générer → **détourer** le fond uni → recadrer/redimensionner → **optimiser** (PNG/WebP léger) → ranger dans `assets/<catégorie>/` puis `games/<slug>/assets/`.

> Astuce cohérence : pour qu'un personnage reste identique d'une image à l'autre, **réutilise la même image de référence** et **décris-le toujours de la même façon**.
