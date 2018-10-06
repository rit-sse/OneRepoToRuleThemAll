const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { execSync } = require('child_process');

const __gitSHA__ = execSync('git rev-parse --short HEAD').toString();

module.exports = {
  entry: {
    Main: './app/js/app.jsx',
    Vendor1: [
      'yup',
      'redux',
      'moment',
      'formik',
      'react-redux',
      'react-popper',
    ],
    Vendor2: [
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
    new webpack.NamedChunksPlugin(),
    new FaviconsWebpackPlugin(path.resolve('./app/img/icon.png')),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_ROOT: JSON.stringify(process.env.API_ROOT || '/api/v2/'),
        '__gitSHA__': JSON.stringify(__gitSHA__),
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: ['Vendor1', 'Vendor2'], minChunks: Infinity }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'Main', async: 'Async4', minChunks: 4 }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'Main', async: 'Async3', minChunks: 3 }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'Main', async: 'Async2', minChunks: 2 }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 8192 }),
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      title: 'Society of Software Engineers',
      filename: '../index.html',
      template: './app/index.ejs',
      urlRoot: 'https://sse.rit.edu',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new UglifyJSPlugin({
      parallel: true,
      sourceMap: false,
      uglifyOptions: {
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
      },
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
