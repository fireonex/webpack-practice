//Проект написан на TypeScript и использует React.
//
// Входная точка: src/index.tsx
//
// Выходной бандл: dist/bundle.js
//
// Поддержка HTML-шаблона (public/index.html), в который автоматически вставляется скрипт.
//
// Webpack должен обрабатывать .tsx и .ts файлы через ts-loader.
//
// Сборка должна работать в режиме development, с sourcemaps.
//
// Настрой webpack-dev-server:
//
// Порт: 3000
//
// Автоматическое открытие в браузере
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{ test: /\.tsx$/, use: 'ts-loader', exclude: /node_modules/, }],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
    devServer: {
        port: 3000,
        open: true,
    },
    devtool: 'source-map',
    mode: 'development',
};