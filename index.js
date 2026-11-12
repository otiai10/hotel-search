require('reflect-metadata');
require('zone.js');

require('./src/main');

// index html
require('file-loader?name=[name].[ext]!./index.html');