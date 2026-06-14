# 05 — CONFORMITÉ, SÉCURITÉ & ACCESSIBILITÉ

Comment rendre la ludothèque **irréprochable** pour les enfants et **digne de la confiance totale des parents** — ce qui est ton meilleur argument.

> ⚠️ Ce document est un guide pratique, **pas un avis juridique**. Avant publication officielle, fais valider par un professionnel selon ton pays de diffusion.

---

## 1. La stratégie gagnante : NE RIEN COLLECTER

La façon la plus simple — et la plus honnête — d'être conforme partout : **ne collecter aucune donnée personnelle**. Tout reste **sur l'appareil de l'enfant** (`localStorage`), rien ne part vers un serveur.

Conséquence : tu évites l'essentiel des obligations lourdes, **et** tu peux l'écrire en grand : *« Aucune donnée, aucune pub, aucun pistage. »* C'est exactement ce que cherchent les parents aujourd'hui.

## 2. Le paysage réglementaire (2026) en clair

- **COPPA (États-Unis)** — règle **mise à jour**, mise en conformité exigée depuis le **22 avril 2026**. Elle élargit la notion de « donnée personnelle » aux **identifiants persistants** (ID d'appareil, **adresse IP**), à la **géolocalisation**, aux données biométriques et comportementales ; impose un **opt-in séparé** pour la pub ciblée et des règles strictes de **conservation/suppression**.
- **RGPD-K (Union européenne)** — protège les données des enfants (jusqu'à **16 ans** selon les pays).
- **UK Age-Appropriate Design Code** et **California AADC** — imposent de concevoir « dans l'intérêt supérieur de l'enfant » (jusqu'à **18 ans**).

> Puisqu'on **ne collecte rien** et qu'on **ne diffuse aucune pub**, on se place d'emblée du bon côté de toutes ces règles. Restent quelques points d'attention techniques ci-dessous.

## 3. Règles concrètes à appliquer (checklist conformité)

- ✅ **Aucun compte obligatoire.** On joue sans inscription.
- ✅ **Aucune donnée personnelle** (nom, e-mail, âge précis, photo…). Si un prénom est demandé pour personnaliser, il reste **en local** et facultatif.
- ✅ **Zéro publicité**, **zéro pisteur tiers** (pas de cookies pub, pas de SDK marketing).
- ✅ **Analytique** : aucune, ou alors **respectueuse de la vie privée** (mesure agrégée, sans cookies, sans identifiant ; attention : l'**IP** est une donnée — privilégier un outil qui ne la stocke pas).
- ✅ **Aucun lien sortant** dans l'espace enfant (pas de pub, pas de réseaux sociaux, pas de boutique).
- ✅ **Pas de chat, pas de contenu partagé** entre utilisateurs (aucune mise en relation).
- ✅ **Porte parentale** (« parental gate ») devant toute zone adulte (réglages sensibles, dons, contact) : une mini-question que seuls les grands résolvent.
- ✅ **Politique de confidentialité** simple et honnête (« nous ne collectons rien ») + page « pour les parents ».
- ✅ **Pas de profilage**, **pas de notifications** manipulatrices.

## 4. Sécurité technique

- **HTTPS** partout (automatique avec Cloudflare Pages).
- **Aucune surface de connexion** = quasiment aucune surface d'attaque (pas de mots de passe à voler).
- Contenu **revu** avant publication (rien d'inapproprié n'entre dans les assets).
- Dépendances à jour ; code simple et auditable.

## 5. Accessibilité (pour que TOUS les enfants jouent)

- **Non-lecteurs (5–7 ans)** : tout jouable avec **voix off + icônes**, sans avoir à lire.
- **Dyslexie** : option de **police adaptée** et espacement augmenté.
- **Daltonisme** : ne jamais coder une information **uniquement** par la couleur (ajouter forme/icône/texte) ; palettes sûres.
- **Malvoyance** : fort contraste, éléments grands, possibilité d'agrandir.
- **Audition** : tout compréhensible **sans le son** (indices visuels, sous-titres).
- **Épilepsie / photosensibilité** : **aucun flash** rapide, pas de clignotements agressifs.
- **Motricité** : cibles tactiles ≥ 48 px, pas de gestes complexes, navigation au clavier possible.
- Viser les standards **WCAG** (niveau AA visé quand pertinent).

## 6. Sécurité du contenu (adapté à l'âge)

- Visuels **doux** : pas de violence, pas de contenu effrayant, pas de stéréotypes.
- **Représentation inclusive** (genres, origines, handicaps) dans les personnages.
- Échecs **bienveillants** : pas de « game over » brutal, on encourage et on réessaie.
- Ton **positif** et rassurant partout.

## 7. Usage sain (bien-être de l'enfant)

- **Pas de dark patterns** : rien qui pousse à jouer plus que de raison.
- **Suggestions de pause** après un certain temps ; pas de « combos quotidiens » culpabilisants.
- Pas de récompenses à heure fixe pour « faire revenir » l'enfant.
- Message clair aux parents : ces jeux **complètent**, ne remplacent pas, le jeu libre et le temps d'écran raisonnable.

## 8. Mini-checklist « avant de publier un jeu »

- [ ] Aucune donnée personnelle envoyée nulle part
- [ ] Aucun pisteur / pub / lien sortant dans l'espace enfant
- [ ] Porte parentale devant les zones adultes
- [ ] Police dyslexie dispo · contrastes OK · info pas que par la couleur
- [ ] Jouable sans son et sans lecture (5–7 ans)
- [ ] Aucun flash rapide
- [ ] Contenu revu (rien d'inapproprié)
- [ ] Politique de confidentialité à jour

---
*Document 05 — Conformité & sécurité. Ces principes nourrissent ta communication (`08_LANCEMENT_MARKETING.md`) : la confiance est ton meilleur atout.*
