# Roadmap - Study Chill

## 🟢 État Actuel (Current State)

### Architecture & Tech Stack
- **Framework :** Angular
- **Styles :** SCSS avec utilisation de variables CSS (`:host`) pour la maintenabilité et le theming.
- **Layout :** Responsive design utilisant CSS Grid (`auto-fit`) et Flexbox.

### Fonctionnalités Implémentées
- **Section Studio (UI) :**
  - Interface utilisateur pour la sélection d'ambiances sonores.
  - **Cartes de son (Sound Cards) :**
    - Affichage avec Emoji et Nom.
    - États visuels gérés : Normal, Survol (Hover), Actif (Active/Selected).
    - Animations CSS fluides (`transform`, `box-shadow`).
  - **Contrôle du volume :** Slider stylisé (`accent-color`) pour ajuster l'intensité.

## 🚀 Prochaines Étapes (Next Steps)

### Court Terme (Short Term)
- [ ] **Moteur Audio (Audio Service) :**
  - Implémenter un service Angular pour charger et jouer les fichiers audio.
  - Gérer la lecture en boucle (loop) fluide (gapless playback).
  - Permettre le mixage de plusieurs sons simultanément (ex: Pluie + Feu).
- [ ] **Logique Studio :**
  - Connecter le slider de volume de l'UI au volume réel de l'élément `<audio>`.
  - Gérer l'état Play/Pause global.

### Moyen Terme (Medium Term)
- [ ] **Timer / Pomodoro :**
  - Ajouter un minuteur configurable pour les sessions de focus (25/5 min).
  - Notifications visuelles ou sonores à la fin du timer.
- [ ] **Thèmes :**
  - Implémenter un toggle Dark Mode / Light Mode global en utilisant les variables CSS déjà en place.
- [ ] **Interface Globale :**
  - Finaliser le Header (navigation) et le Footer.

### Long Terme (Long Term)
- [ ] **Persistance (LocalStorage) :**
  - Sauvegarder le mix actuel (sons actifs et volumes) pour le retrouver au rechargement de la page.
- [ ] **To-Do List Minimaliste :**
  - Ajouter un widget simple pour noter les objectifs de la session.
- [ ] **Presets :**
  - Proposer des mélanges prédéfinis (ex: "Café un jour de pluie", "Nuit en forêt").

## 🐛 Améliorations Techniques
- [ ] Optimisation des fichiers audio (formats WebM/Ogg pour le web).
- [ ] Accessibilité (A11y) : S'assurer que les cartes de son sont navigables au clavier (`tabindex`, `aria-label`).