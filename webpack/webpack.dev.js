//Наследует common
//
// Добавляет:
//
// devtool: 'source-map'
//
// devServer на 3000 с автооткрытием
//
// mode: 'development'

const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
module.exports = merge(baseConfig, {
    devServer: {
        port: 3000,
        open: true,
    },
    devtool: 'source-map',
    mode: 'development',
});