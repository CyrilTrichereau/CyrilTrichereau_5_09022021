// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: 
  {
    homePage: "./src/js/homePage.js",
    productPage: "./src/js/productPage.js",
    cart: "./src/js/cart.js",
    orderConfirmation: "./src/js/orderConfirmation.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "./pages/productPage.html",
      template: "./src/pages/productPage.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "./pages/cart.html",
      template: "./src/pages/cart.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "./pages/orderConfirmation.html",
      template: "./src/pages/orderConfirmation.html",
      inject: false,
    }),

    new CopyPlugin({
      patterns: [
        { from: "./static", to: "./static" },
        { from: "./src/fonts", to: "./fonts" },
        { from: "./src/images", to: "./images" },
        { from: "./src/styles", to: "./styles" },
      ],
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};

