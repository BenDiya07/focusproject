# Study Chill 🎧

Une application web Angular conçue pour améliorer la concentration et la productivité, combinant un minuteur Pomodoro, un mixeur de sons d'ambiance et un gestionnaire de tâches. Idéal pour les étudiants, les développeurs et toute personne cherchant à créer un environnement de travail apaisant.

!Aperçu de l'application Study Chill
*(Note : ajoutez une capture d'écran du projet dans `public/images/preview.png`)*

---

## 🚀 À propos du projet

**Study Chill** centralise plusieurs outils de productivité dans une interface fluide et responsive. Plutôt que de jongler entre un minuteur, une playlist et une to-do list, l'application offre tout cela au même endroit.

L'interface est inspirée du « glassmorphism » et conçue pour rester simple, agréable et discrète pendant les sessions de concentration.

### ✨ Fonctionnalités

*   **Studio de Concentration** : Un espace central avec un **minuteur Pomodoro** et un sélecteur de sons d'ambiance.
*   **Mixeur de Sons** : Choisissez et jouez des ambiances comme la pluie, le café ou des rythmes Lofi.
*   **Gestionnaire de Tâches** : Une page "Cours" pour ajouter, terminer et supprimer des tâches avec une sauvegarde locale.
*   **Dashboard** : Suivi visuel de la progression et des tâches terminées.
*   **Design Responsive** : Fonctionne bien sur desktop et mobile.

---

## 🛠️ Stack Technique

Ce projet utilise des technologies modernes pour une application frontend performante.

*   **Angular 21**
*   **TypeScript**
*   **Signals**
*   **SCSS**
*   **Anime.js**
*   **Chart.js**
*   **Vercel**

---

## ✅ CI / Déploiement

Le projet est déjà configuré pour une validation GitHub Actions et un déploiement automatique sur Vercel.

*   GitHub Actions exécute `npm install` et `npm run build` sur la branche `main`.
*   Vercel déploie automatiquement les commits poussés sur `main`.
*   Le fichier `vercel.json` est présent pour assurer le routage SPA d'Angular : toutes les routes sont réécrites vers `/`.

---

## ⚙️ Démarrage

### Installation

1.  Clonez le dépôt
    ```sh
    git clone https://github.com/votre-username/study-chill.git
    ```
2.  Installez les dépendances
    ```sh
    npm install
    ```
3.  Lancez le serveur de développement
    ```sh
    npm run start
    ```
4.  Ouvrez le navigateur sur `http://localhost:4200/`

### Scripts utiles

*   `npm run start` — lance l'application en mode développement
*   `npm run build` — génère le build de production
*   `npm run test` — exécute les tests
*   `npm run watch` — build en mode watch pour développement

---

## 🗺️ Roadmap

Les prochaines étapes sont détaillées dans `ROADMAP.md`.

## 📞 Contact

Beni Diyavanga - LinkedIn