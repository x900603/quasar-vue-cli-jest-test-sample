# quasar-vue-cli-jest-test-sample

## Create project with vue cli

```shell
vue create  --packageManager yarn quasar-vue-cli-jest-test-sample
```

```shell
Vue CLI v5.0.8
? Please pick a preset: `Manually select features`
? Check the features needed for your project: `Babel, TS, Router, CSS Pre-processors, Linter, Unit, E2E`
? Choose a version of Vue.js that you want to start the project with `3.x`
? Use class-style component syntax? `No`
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? `Yes`
? Use history mode for router? (Requires proper server setup for index fallback in production) `Yes`
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): `Sass/SCSS (with dart-sass)`
? Pick a linter / formatter config: `Prettier`
? Pick additional lint features: `Lint on save, Lint and fix on commit`
? Pick a unit testing solution: `Jest`
? Pick an E2E testing solution: `Cypress`
? Where do you prefer placing config for Babel, ESLint, etc.? `In dedicated config files`
```

## Add quasar

```shell
vue add quasar
```

```shell
✔  Successfully installed plugin: vue-cli-plugin-quasar

? Allow Quasar to replace App.vue, About.vue, Home.vue and (if available) router.js? `Yes`
? Pick your favorite CSS preprocessor: `SCSS`
? Choose Quasar Icon Set `Material`
? Default Quasar language pack - one from https://github.com/quasarframework/quasar/tree/dev/ui/lang `en-US`
? Use RTL support? `No`
? Select features: `Material, Material Outlined`
```

## Install Quasar Testing

```shell
yarn add -D @quasar/babel-preset-app @quasar/quasar-app-extension-testing-unit-jest
```

## Set babel.config.js and jest.config.js

`babel.config.js`

```javascript
module.exports = (api) => {
  const envOptions = {};

  // Options scaffolded by Quasar out of the box
  if (api.caller((caller) => caller && caller.target === "node")) {
    envOptions.targets = { node: "current" };
  }

  // Only used in test environment in JS codebases
  if (api.env() === "test") {
    envOptions.modules = "commonjs";
    envOptions.targets = { node: "current" };
  }

  return {
    presets: [["@quasar/babel-preset-app", envOptions]],
  };
};
```

`jest.config.js`

```javascript
module.exports = {
  // point to jest-preset.mjs (base config) file in the library
  preset: "@quasar/quasar-app-extension-testing-unit-jest",
  // override these to conform to project structure / test directory
  testMatch: [
    "<rootDir>/tests/unit/**/*.(spec|test).+(ts|js)?(x)",
    "<rootDir>/src/**/*.jest.(spec|test).+(ts|js)?(x)",
  ],
  // collectCoverage: true,
  // the transforms are copied from the jest-preset.mjs file mentioned above, but includes the 'babel-jest' entry
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".*\\.js$": "babel-jest",
    ".*\\.vue$": ["@vue/vue3-jest", { pug: { doctype: "html" } }],
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
};
```

## Project setup

```shell
yarn install
```

### Compiles and hot-reloads for development

```shell
yarn serve
```

### Compiles and minifies for production

```shell
yarn build
```

### Run your unit tests

```shell
yarn test:unit
```

### Run your end-to-end tests

```shell
yarn test:e2e
```

### Lints and fixes files

```shell
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
