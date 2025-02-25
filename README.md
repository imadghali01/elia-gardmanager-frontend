# eDuty (Front-End)
Ce projet est le frontend de l'application Elia GardManager. Il permet d'afficher et de gérer des plannings de travail de manière interactive et efficace.

L'application est construite avec React, Vite et TailwindCSS, offrant une interface fluide et moderne.

✨ Fonctionnalités
Interface interactive : Gestion intuitive des plannings avec une interface claire et réactive.
Gestion des événements : Possibilité d'ajouter, modifier et supprimer des événements/shifts.
Affichage dynamique : Les plannings sont affichés avec des couleurs distinctes pour une meilleure lisibilité.
React & TailwindCSS : Utilisation de React pour la gestion des composants et TailwindCSS pour un design moderne et adaptable.
✅ Ce qui est déjà fait
Actuellement, l'application permet :

D'afficher un calendrier interactif avec des shifts colorés.
D'ajouter/modifier/supprimer des événements via un popup dynamique.
De gérer les données via un backend connecté.
🔜 À venir
Amélioration de l'interface : Ajout de nouvelles animations et transitions pour une meilleure expérience utilisateur.
Filtres et recherches avancées : Possibilité de filtrer les shifts par utilisateur, date, type, etc.
Notifications en temps réel : Ajout de WebSockets pour synchroniser les modifications instantanément.
📥 Installation
1️⃣ Cloner ce dépôt sur votre machine locale :

sh
Copier le code
git clone https://github.com/ton-org/elia-gardmanager-frontend.git
cd elia-gardmanager-frontend
2️⃣ Installer les dépendances :

sh
Copier le code
npm install  # ou yarn install
3️⃣ Lancer le serveur de développement :

sh
Copier le code
npm run dev
📍 L'application sera accessible sur http://localhost:5173

🛠️ Commandes utiles
Démarrer en mode développement :
sh
Copier le code
npm run dev
Build pour la production :
sh
Copier le code
npm run build
Aperçu du build de production :
sh
Copier le code
npm run preview
Vérification et correction du code (Lint) :
sh
Copier le code
npm run lint
⚙️ Configuration
Si le projet utilise des variables d'environnement, crée un fichier .env à la racine avec les valeurs nécessaires.

Exemple :

sh
Copier le code
VITE_API_URL=https://api.example.com
🔗 Backend
Ce projet fonctionne avec le backend Elia GardManager.
Assure-toi de l'avoir démarré avant de lancer le frontend.

💡 Une question ? Ouvre une issue ou contacte l'équipe ! 🚀

