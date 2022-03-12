const path = require("path");
const addRewireScssLoader = require("react-app-rewire-scss-loaders");

module.exports = function override(config, env) {
  config = addRewireScssLoader("sass-resources-loader", {
    resources: [
      path.resolve(__dirname, "src/assets/scss/variables.scss"),
      path.resolve(__dirname, "src/assets/scss/mixins.scss"),
    ],
  })(config, env);

  return config;
};
