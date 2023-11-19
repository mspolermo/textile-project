const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        assetModuleFilename: path.join('images', '[name].[contenthash][ext]')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        port: 3000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test:/\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('icons', '[name].[contenthash][ext]'),
                },
            },
        ]
    }
}