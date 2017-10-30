const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

module.exports = {
  entry: [
    './src/client/entry'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
    ]
  },
  resolve: {
    modules: [
      path.resolve('./'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.scss'],
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './src/client/',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: 'src/client/index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
