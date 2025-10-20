# Portfolio Dev Fullstack

Landing page moderne présentant mes principales contributions et projets en tant que développeur Fullstack.

🔗 **[Voir le portfolio en ligne](https://blaisebouda.github.io/portfolio)**

## 📋 Description

Ce portfolio est une vitrine interactive de mes compétences et réalisations en développement web. Il met en avant mes projets, mes technologies maîtrisées et mon parcours professionnel.

## 🚀 Technologies utilisées

- **React 19** - Framework UI moderne avec les dernières fonctionnalités
- **Vite** - Build tool ultra-rapide pour le développement et la production
- **TypeScript** - Typage statique pour un code plus robuste
- **ESLint** - Analyse de code pour maintenir la qualité
- **GitHub Pages** - Hébergement gratuit et déploiement automatisé

## 📦 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

```bash
# Cloner le repository
git clone https://github.com/blaisebouda/portfolio.git

# Accéder au dossier
cd portfolio

# Installer les dépendances
npm install
```

## 🛠️ Commandes disponibles

```bash
# Lancer le serveur de développement
npm run dev

# Compiler le TypeScript et builder pour la production
npm run build

# Prévisualiser le build de production localement
npm run preview

# Analyser le code avec ESLint
npm run lint

# Déployer sur GitHub Pages
npm run deploy
```

## 🌐 Déploiement

Le portfolio est automatiquement déployé sur GitHub Pages. Pour déployer une nouvelle version :

```bash
npm run deploy
```

Cette commande effectue les actions suivantes :

1. Compile le TypeScript
2. Build l'application pour la production
3. Déploie le contenu du dossier `dist` sur la branche `gh-pages`

## 📁 Structure du projet

```
portfolio/
├── src/              # Code source de l'application
├── public/           # Fichiers statiques
├── dist/             # Build de production (généré)
├── node_modules/     # Dépendances (généré)
├── package.json      # Configuration npm et scripts
├── vite.config.ts    # Configuration Vite
├── tsconfig.json     # Configuration TypeScript
└── eslint.config.js  # Configuration ESLint
```

## 🔧 Configuration

### Vite

Le projet utilise le plugin officiel `@vitejs/plugin-react` qui utilise Babel (ou oxc avec rolldown-vite) pour le Fast Refresh lors du développement.

### TypeScript

Le projet est configuré avec TypeScript pour bénéficier du typage statique et d'une meilleure expérience de développement.

### ESLint

L'analyse de code est configurée avec les règles recommandées pour React et TypeScript, incluant :

- `eslint-plugin-react-hooks` - Validation des règles des Hooks React
- `eslint-plugin-react-refresh` - Support du Fast Refresh

## 📝 License

Ce projet est sous licence publique. Tous droits réservés.

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter via [GitHub](https://github.com/blaisebouda).

---

Développé avec ❤️ par Blaise Bouda
