const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

const server = new WebpackDevServer(webpack(config), {
  contentBase: './app',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true,
});

server.listen(process.env.PORT || 5000, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at 0.0.0.0:' + (process.env.PORT || 5000));
});
