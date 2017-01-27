const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './app/js/app.jsx',
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: '[chunkhash].bundle.js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./app'),
      'node_modules',
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_ROOT: JSON.stringify(process.env.API_ROOT || 'http://localhost:3000/api/v1/'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 8192 }),
    new HtmlWebpackPlugin({
      title: 'Society of Software Engineers',
      filename: '../index.html',
      template: './app/index.ejs',
    }),
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
      filename: '[chunkhash].bundle.css',
      allChunks: true,
      sourceMap: false,
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
        loaders: ['raw-loader'],
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
