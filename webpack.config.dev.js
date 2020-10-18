
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config')

module.exports = {
    ...base,
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    }, // devtools和devServer是开发才用的
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },

}