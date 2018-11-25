const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

const browserConfig = {
  entry: ["./src/browser/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/public.js",
    publicPath: "/static/"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8083
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      // {
      //   test: /\.(s*)css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: "/static/"
      //       }
      //     },
      //     "css-loader",
      //     "sass-loader"
      //   ]
      // },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/browser/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "public/css/[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
    new webpack.DefinePlugin({
      __isBrowser__: true
    })
  ]
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "server.min.js",
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      // {
      //   test: /\.(s*)css$/,
      //   use: ["style-loader", "css-loader", "sass-loader"]
      // },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/static/"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/browser/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "public/css/[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
    new webpack.DefinePlugin({
      __isBrowser__: false
    })
  ]
};

module.exports = [browserConfig, serverConfig];
