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
