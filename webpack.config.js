const webpack = require('webpack');
const path = require('path');
const AutoDllPlugin = require('autodll-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
        }),
        new CopyWebpackPlugin([
            { from: 'static/images', to: 'images' },
        ]),
        new AutoDllPlugin({
            inject: true,
            context: __dirname,
            filename: '[name]_[hash].js',
            path: './dll',
            entry: {
                vendor: [
                    'prop-types',
                    'react',
                    'react-dom',
                    'react-redux',
                    'react-router',
                    'react-router-dom',
                    'redux',
                    'redux-thunk',
                ]
            }
        })
    ]
};
