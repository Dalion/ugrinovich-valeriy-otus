const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.jsx",
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  }
};