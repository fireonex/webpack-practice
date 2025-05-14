//Наследует common
//
// Добавляет:
//
// mode: 'production'
//
// Минификация (включается автоматически)
//
// Очистка dist (если не добавишь в common)
//
// Включает hash в имя файла (bundle.[contenthash].js) для кэширования

const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
const path = require("path");
module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    mode: 'production',
});