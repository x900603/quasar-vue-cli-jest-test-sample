module.exports = (api) => {
  const envOptions = {};

  if (api.caller((caller) => caller && caller.target === "node")) {
    envOptions.targets = { node: "current" };
  }

  if (api.env() === "test") {
    envOptions.modules = "commonjs";
    envOptions.targets = { node: "current" };
  }

  return {
    presets: [["@quasar/babel-preset-app", envOptions]],
  };
};
