const { name } = require("./package.json");
const { resolve } = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("../webpack.common.js");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: resolve(__dirname, "./src/index.tsx"),
  output: {
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
