const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: "./src/public/index.html",
  filename: "./index.html"
});
const envPlugin = env => new webpack.DefinePlugin({
  "process.env.API_BASE_URL": JSON.stringify(env.API_BASE_URL)
});

module.exports = env => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]_[local]_[hash:base64]"
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [htmlWebPackPlugin, envPlugin(env)],
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true
  }
});
