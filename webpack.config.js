'use strict';
const path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware',
    "#{__dirname}/../index.js",
],
  output: {
    path: '/',
    publicPath: 'http://localhost:3000/js/',
    filename: 'bundle.js',
  },
}
