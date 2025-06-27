# 📝 ToDo List React App

Une application de gestion de tâches simple et responsive, construite avec **React**, **Bootstrap** et les **Hooks** (`useState`, `useEffect`). Les données sont stockées localement via `localStorage`.

---

## 🚀 Fonctionnalités

- ✅ Ajouter, modifier et supprimer des tâches
- 💾 Sauvegarde automatique dans le navigateur (`localStorage`)
- 📱 Interface responsive grâce à Bootstrap
- ⚛️ Composants fonctionnels avec Hooks
- 🧠 Hook personnalisé `useLocalStorage`

---

## 📸 Aperçu

![demo](https://via.placeholder.com/600x300.png?text=Demo+ToDo+App)

---

## 🧱 Structure du projet

todo-list-app/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── TaskForm.jsx
│ │ ├── TaskItem.jsx
│ │ └── TaskList.jsx
│ ├── hooks/
│ │ └── useLocalStorage.js
│ ├── styles/
│ │ └── App.css
│ ├── App.jsx
│ ├── constants.js
│ └── index.js
├── package.json
└── README.md

yaml
Copier
Modifier

Technologies utilisées
React

Bootstrap 5

JavaScript (ES6+)

HTML / CSS

onctionnement du stockage local
Les tâches sont stockées sous forme de tableau JSON dans le localStorage du navigateur sous la clé :

perl
Copier
Modifier
my-todo-list

---

## 📦 Installation


```bash
# 1. Cloner le dépôt
git clone https://github.com/ton-utilisateur/todo-list-app.git
cd todo-list-app

# 2. Installer les dépendances
npm install

# 3. Lancer l'application
npm start

---
