module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:jsx-a11y/recommended',
    ],
    plugins: [
      'react',
      'import',
      'jsx-a11y',
    ],
    rules: {
      // Ajoutez vos règles personnalisées ici
      'react/react-in-jsx-scope': 'off', // Exemple de règle personnalisée
    },
    settings: {
      react: {
        version: 'detect', // Détecte automatiquement la version de React
      },
    },
  };
  