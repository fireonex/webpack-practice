module.exports = (env) => {
    return require(`./webpack.config.${env}.js`)
}

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
// module.exports = {
//     entry: './src/index.tsx',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//         assetModuleFilename: 'assets/[hash][ext][query]',
//         clean: true,
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/
//             }, {
//                 test: /\.css$/i,
//                 use: [
//                     'style-loader',
//                     {loader: 'css-loader', options: {sourceMap: true}},
//                 ],
//             },
//             {
//                 test: /\.(png|jpe?g|gif|svg)$/i,
//                 type: 'asset/resource',
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js'],
//     },
//     plugins: [new HtmlWebpackPlugin({template: './public/index.html'})],
//     devServer: {
//         port: 3000,
//         open: true,
//     },
//     devtool: 'source-map',
//     mode: 'development',
// };