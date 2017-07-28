const webpack = require('webpack');
const path = require('path');
const AutoDllPlugin = require('autodll-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cleanArray = arr => arr.reduce(
    (res, el) => {
        if (el !== null && el !== undefined) {
            res.push(el);
        }
        return res;
    }, []
);

const isProd = (yes, no) => (process.env.NODE_ENV === 'production' ? yes : no);

module.exports = {
    entry: './src/index.js',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    devtool: isProd('hidden-source-map', 'cheap-module-eval-source-map'),

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
        }),
        new CopyWebpackPlugin([
            { from: 'static/images', to: 'images' },
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
                    'react-collapse',
                    'react-dom',
                    'react-motion',
                    'react-redux',
                    'react-router',
                    'react-router-dom',
                    'redux',
                    'redux-thunk',
                ],
            },
            plugins: cleanArray([
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
                    },
                }),
                isProd(new webpack.optimize.UglifyJsPlugin()),
            ]),
        }),
    ],
};
