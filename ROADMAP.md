# Roadmap - Study Chill

## 🟢 État Actuel (Current State)

### Architecture & Tech Stack
- **Framework :** Angular (v21 avec Standalone Components et Signals).
- **Styles :** SCSS avec un design system léger basé sur des variables CSS globales.
- **Layout :** Responsive, header fixe et menu mobile adaptatif.
- **State Management :** Services Angular dédiés (`DashboardService`, `TimerService`, `ThemeService` placeholder).

### Fonctionnalités Implémentées
- **Design System Global :**
  - Variables CSS partagées (`--accent-color`, `--radius-*`, `--shadow-*`, etc.).
  - Styles de base pour `.card`, `.btn`, `input`, `textarea` et `.glass`.
- **Header / Navigation :**
  - Header fixe avec effet de verre.
  - Menu mobile responsive avec bouton hamburger et ouverture animée.
- **Thème :**
  - Dark mode global retiré ; interface stable en thème clair.
- **Dashboard :**
  - `DashboardService` expose des métriques de session.
  - Dashboard structurel simplifié sans Chart.js pour l’instant.
- **Timer & Session :**
  - `TimerService` corrigé pour des sessions plus fiables.

## 🚀 Prochaines Étapes (Next Steps)

### Court Terme
- [ ] **Audio Studio :**
  - Ajouter un service audio pour la lecture des sons.
  - Lier les contrôles UI au volume et au statut de lecture.
- [ ] **Dashboard analytique :**
  - Ajouter des visualisations réelles de session.
  - Stocker l'historique par date.
- [ ] **UI System :**
  - Étendre les tokens de design à toutes les sections.
  - Uniformiser les cartes, boutons et formulaires.

### Moyen Terme
- [ ] **Persistance avancée :**
  - Sauvegarder l'historique des sessions, des tâches et des réglages.
- [ ] **Accessibilité :**
  - Renforcer la navigation clavier, les rôles ARIA et le contraste.
- [ ] **Dashboard amélioré :**
  - Ajouter de vrais graphiques et des métriques d'activité.

### Long Terme
- [ ] **Mix audio / presets :**
  - Sauvegarder les réglages sonores et proposer des presets.
- [ ] **Expérience produit :**
  - Créer une UX plus immersive avec des animations premium et une structure plus complète.

## 🐛 Améliorations Techniques
- [ ] Optimiser les performances CSS et la gestion responsive.
- [ ] Nettoyer les services métier pour isoler l’UI de la logique.
- [ ] Retirer les dépendances inutilisées et simplifier le code.