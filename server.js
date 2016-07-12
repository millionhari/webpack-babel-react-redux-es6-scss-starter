const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  const webpackPort = 3001;
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.config.js');
  const opener = require('opener');
  app.use(express.static(__dirname));
  new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    proxy: {
      '*': `http://localhost:${port}`
    }
  }).listen(webpackPort, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`Hotloader enabled on ${webpackPort}`);
  });

  opener('http://localhost:3001/');
} else {
  app.use(express.static(path.join(__dirname, 'dist')));
}

app.listen(port, () => console.log(`Express server listening on ${port}`));
