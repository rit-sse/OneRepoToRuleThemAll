const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { execSync } = require('child_process');

const __gitSHA__ = execSync('git rev-parse --short HEAD').toString();

module.exports = {
  entry: {
    main: [
      './app/js/app.jsx',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:5000',
    ],
    vendor: [
      'redux',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react',
      'react-dom',
    ],
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./app'),
      path.resolve('./app/js'),
      'node_modules',
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_ROOT: JSON.stringify(process.env.API_ROOT || '/api/v2/'),
        '__gitSHA__': JSON.stringify(__gitSHA__),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Society of Software Engineers',
      template: './app/index.ejs',
      urlRoot: process.env.URL_ROOT || 'localhost:5000',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.md$/,
        loaders: ['html-loader', 'markdown-loader'],
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(gif|png|jpg|jpeg)(\?[a-z0-9]+)?$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
};
