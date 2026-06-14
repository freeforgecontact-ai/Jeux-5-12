# PROMPTS DE CONSTRUCTION DE JEU (Antigravity / Claude)

Pour faire **coder un jeu** par les agents de Google Antigravity (ou par Claude/Cowork). Remplace les champs `<...>`.

---

## A. Prompt générique (modèle à réutiliser)

```
RÔLE : Tu es développeur de jeux web pour enfants. Construis un mini-jeu éducatif
de grande qualité, fini et jouable.

CONTEXTE DU PROJET (Lumio — ludothèque éducative gratuite) :
- Jeux 100 % éducatifs pour enfants de 5 à 12 ans, gratuits, SANS publicité, SANS
  collecte de données, sans achat intégré.
- Technos : HTML5 + JavaScript, moteur Phaser 4 (jeux simples possibles en HTML/Canvas).
- Doit marcher sur ORDINATEUR ET MOBILE (tactile + souris), responsive, jouable hors-ligne.
- BILINGUE Français + Anglais : tous les textes via i18n (fr.json / en.json), aucun texte en dur.
- Accessible : cibles tactiles >= 48px, fort contraste, info jamais codée que par la couleur,
  aucun flash rapide, jouable sans lecture pour les 5-7 ans (icônes + voix off).
- Style visuel : plat, arrondi, couleurs vives chaleureuses (jaune #FFC542, turquoise #2EC4B6,
  corail #FF6B6B, vert #6BCB77, encre #2D3142, crème #FFF8EE). Polices rondes (Fredoka/Nunito).
- Sauvegarde de la progression en localStorage (PAS de serveur, PAS de compte).
- Bouton son (muet) et bouton retour toujours visibles. Échecs bienveillants (« essaie encore »).

LE JEU À CONSTRUIRE :
- Nom : <Nom FR> / <Nom EN>
- Âge : <tranche>
- Compétence visée (UNE seule) : <compétence>
- Boucle de jeu : <décris ce que l'enfant fait en boucle>
- Écrans : titre -> jeu -> réussite
- Montée de difficulté : <les paliers>
- Feedback : immédiat et positif à chaque action ; encourageant à l'erreur
- Critère de réussite/déblocage : <quand est-ce gagné/maîtrisé>
- Assets disponibles dans /assets : <liste>

LIVRABLE :
- Code complet dans /src + index.html jouable, commenté simplement.
- Textes dans i18n/fr.json et i18n/en.json (mêmes clés).
- Testé mentalement pour mobile ET PC.
- Respecte la « Definition of Done » (docs/10) et les checklists (docs/02 §10, docs/05 §8).
```

---

## B. Exemple rempli — Jeu #1 « Course aux Nombres »

```
[Reprends tout le bloc CONTEXTE ci-dessus, puis :]

LE JEU À CONSTRUIRE :
- Nom : Course aux Nombres / Number Dash
- Âge : 5-7 ans
- Compétence visée : addition et soustraction simples (résultats jusqu'à 10, puis 20)
- Boucle de jeu : un personnage (la luciole Lumi) est sur une ligne numérique. Une opération
  s'affiche (ex. « 3 + 2 »). L'enfant touche, parmi 3 réponses, le bon nombre. Bonne réponse =
  Lumi avance d'une case avec une petite animation joyeuse + son doux. Mauvaise réponse =
  message « essaie encore » bienveillant, aucune pénalité. Arrivée au bout = félicitations + étoile.
- Écrans : titre (logo, bouton Jouer, FR/EN, son) -> jeu (ligne numérique + opération + 3 choix)
  -> réussite (Lumi fête, étoile gagnée, bouton « Encore » / « Suivant »).
- Montée de difficulté : niveau 1 additions <=10 ; niveau 2 soustractions <=10 ;
  niveau 3 mélange <=20. Adaptatif : si l'enfant réussit vite, proposer le niveau au-dessus.
- Feedback : son + animation à chaque bonne réponse ; encouragement à l'erreur, on rejoue la question.
- Critère de déblocage : 5 bonnes réponses d'affilée -> niveau suivant débloqué (étoile).
- Assets : personnage_lumi_face.png, personnage_lumi_saute.png, decor_route.png, etoile.png,
  son_bonne_reponse, son_victoire (à générer via prompts/images).

LIVRABLE : comme défini dans le bloc CONTEXTE.
```

---

> Conseils : itère **petit** (d'abord l'écran titre + une question qui marche), teste souvent,
> joins toujours la fiche `GAME.md` du jeu et un jeu déjà réussi comme exemple.
> Tu peux donner exactement ce prompt à **Antigravity** OU me le donner à moi (**Claude**) pour que je code le jeu.
