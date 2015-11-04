'use strict';

// Guide on using Webpack with React
// https://christianalfoni.github.io/react-webpack-cookbook/index.html

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var srcPath = path.join(__dirname, 'client');

module.exports = {  
  target: 'web',
  cache: true,
  entry: {
    bundle: path.join(srcPath, '/js/app.js'),
    common: ['react', 'react-router', 'flux']
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'client']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '',
    filename: '[name].js',
    library: ['Example', '[name]'],
    pathInfo: true
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {presets:['react','es2015'], cacheDirectory: true}},
      // {test: /\.css$/, loader: 'style!css'},
      // {test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]'},
      // {test: /\.(png|jpg)$/, loader: 'url?limit=25000'},
      {test: /\.woff$/, loader: 'file-loader?name=fonts/[name].[ext]'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'client/index.html'
    }),
    // new ExtractTextPlugin('app.css'),
    new webpack.NoErrorsPlugin()
  ],

  debug: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  }
};