const { name } = require("./package.json");
const { resolve } = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("../webpack.common.js");

const config = merge(commonConfig, {
  entry: ["react-hot-loader/patch", resolve(__dirname, "./src/index.tsx")],
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    library: `${name}-[name]`,
    libraryTarget: "umd",
    jsonpFunction: `webpackJsonp_${name}`,
    globalObject: "window",
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    port: 7001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    hot: false,
    watchContentBase: false,
    liveReload: false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});

module.exports = (env, argv) => {
  if (argv.hot) {
    config.output.filename = "[name].[hash].js";
  }
  return config;
};
