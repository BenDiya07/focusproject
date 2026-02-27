# Roadmap - Study Chill

## 🟢 État Actuel (Current State)

### Architecture & Tech Stack
 - **Framework :** Angular (v17+ avec Signals & Standalone Components)
- **Styles :** SCSS avec utilisation de variables CSS (`:host`) pour la maintenabilité et le theming.
- **Layout :** Responsive design utilisant CSS Grid (`auto-fit`) et Flexbox.
 - **State Management :** Service dédié (`TaskService`) utilisant des Signals (`computed`, `effect`).

### Fonctionnalités Implémentées
- **Section Studio (UI) :**
  - **Cartes de son :** Affichage interactif avec animations CSS fluides.
  - **Guide de Focus :** Section de conseils intégrée pour l'utilisateur.
  - **Timer Circulaire :** Chronomètre SVG animé avec gestion du temps via Signals.
- **Section Cours (Tasks) :**
  - Gestion complète des tâches (Ajout, Suppression, Validation).
  - Persistance automatique via `localStorage`.
- **Section Dashboard :**
  - **Statistiques :** Affichage dynamique du total, des tâches complétées et du taux de réussite.
  - **Graphique :** Visualisation (simulée) de l'activité hebdomadaire.
- **Section About :**
  - Présentation du projet avec mise en page responsive et animations.

## 🚀 Prochaines Étapes (Next Steps)

### Court Terme (Short Term)
- [ ] **Moteur Audio (Audio Service) :**
  - Implémenter un service Angular pour charger et jouer les fichiers audio.
  - Gérer la lecture en boucle (loop) fluide.
  - Permettre le mixage de plusieurs sons simultanément.
- [ ] **Logique Studio :**
  - Connecter le slider de volume de l'UI au volume réel de l'élément `<audio>`.
 - [ ] **Notifications Timer :**
  - Ajouter un son ou une notification navigateur à la fin du timer.

### Moyen Terme (Medium Term)
- [ ] **Thèmes :**
  - Implémenter un toggle Dark Mode / Light Mode global.
- [ ] **Interface Globale :**
  - Créer le composant Footer pour finaliser la structure.
- [ ] **Amélioration du Graphique :**
  - Rendre le graphique du Dashboard réel en stockant l'historique des tâches par date.

### Long Terme (Long Term)
 - [ ] **Persistance Avancée :**
  - Sauvegarder le mix actuel (sons actifs et volumes).
- [ ] **Presets :**
  - Proposer des mélanges prédéfinis (ex: "Café un jour de pluie").

## 🐛 Améliorations Techniques
 - [ ] Optimisation des fichiers audio (formats WebM/Ogg).
 - [ ] Accessibilité (A11y) : Navigation au clavier et labels ARIA.