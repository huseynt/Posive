# To install this project, follow these steps:
```
npm install
npm install @reduxjs/toolkit
npm install react-redux
npm install react-loader-spinner --save
npm install -D tailwindcss postcss autoprefixer
npm install tw-elements
npm install swiper
npm install --save-dev @types/swiper
npm install qrcode.react
npm install --save-dev @types/qrcode.react
npm install axios
npm install react-helmet
npm install --save-dev @types/react-helmet
npm install chart.js react-chartjs-2
npm install @types/chart.js
npm install @tanstack/react-query @tanstack/react-query-devtools react-hook-form
npm install @tanstack/eslint-plugin-query -D
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
