const webpack = require("webpack");

module.exports = async ({ config }) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.THEME": JSON.stringify(process.env.THEME || "kmart"),
    })
  );

  return config;
};
