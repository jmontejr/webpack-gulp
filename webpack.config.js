const { resolve } = require("path");
const webpack = require("webpack");

let webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist/assets/js"),
    filename: "bundle.min.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

function scripts() {
  return new Promise((resolve) =>
    webpack(webpackConfig, (error, stats) => {
      if (error) console.log("Webpack", error);
      // console.log(stats.toString({ /* stats options */ }));
      resolve();
    })
  );
}

module.exports = {
  webpackConfig,
  scripts,
};
