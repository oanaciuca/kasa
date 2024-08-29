import { Linter } from 'eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

// Créez les configurations pour chaque plugin
const reactConfig = eslintPluginReact.configs.recommended;
const importConfig = eslintPluginImport.configs['errors-warnings'];
const jsxA11yConfig = eslintPluginJsxA11y.configs.recommended;

/** @type {Linter.FlatConfig} */
const config = [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      parser: '@babel/eslint-parser',
      babelOptions: {
        presets: ['@babel/preset-react'],
      },
    },
    plugins: {
      react: eslintPluginReact,
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Exemple de règle personnalisée
      // Ajoutez vos règles personnalisées ici
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    // Incluez directement les configurations des plugins
    overrides: [
      {
        files: ['**/*.js', '**/*.jsx'],
        ...reactConfig,
        ...importConfig,
        ...jsxA11yConfig,
      },
    ],
  },
];

export default config;
