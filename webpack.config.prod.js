const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const InlineChunkWebpackPlugin = require('html-webpack-inline-chunk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './app/js/app.jsx',
    vendor1: [
      'redux',
      'moment',
      'redux-form',
      'react-redux',
      'reactstrap-tether',
    ],
    vendor2: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'connected-react-router',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: '[name].[chunkhash].js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./app'),
      path.resolve('./app/js'),
      'node_modules',
    ],
  },
  plugins: [
    new FaviconsWebpackPlugin(path.resolve('./app/img/icon.png')),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_ROOT: JSON.stringify(process.env.API_ROOT || '/api/v2/'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: ['vendor1', 'vendor2', 'manifest'], minChunks: Infinity }),
    new webpack.optimize.CommonsChunkPlugin({ async: 'Async', minChunks: 2 }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 8192 }),
    new HtmlWebpackPlugin({
      title: 'Society of Software Engineers',
      filename: '../index.html',
      template: './app/index.ejs',
      urlRoot: 'https://sse.rit.edu',
    }),
    new InlineChunkWebpackPlugin({
      inlineChunks: ['manifest'],
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: false,
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true,
    }),
    ...process.env.DEBUG ? [new BundleAnalyzerPlugin({
      analyzerMode: 'server',
    })] : [],
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
        loader: ExtractTextPlugin.extract(['css-loader', 'resolve-url-loader', 'sass-loader']),
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
