'use strict';

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ((files) => (NODE_ENV != "production" ? [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
    ] : []).concat(files))(['./js/index'])
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'assets/js/[name].bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({template: 'index.html'}),

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(NODE_ENV != "production")
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8089,
    publicPath: '/',
    hot: NODE_ENV != "production"
  }
};

if (NODE_ENV != "production") {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
