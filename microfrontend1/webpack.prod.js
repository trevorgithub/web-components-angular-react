const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, '../dist/microfrontend1'),
        filename: '[name].js'
    },
    devtool: 'source-map'
});