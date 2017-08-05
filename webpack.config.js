const path = require('path');

const webpack = require('webpack');
const AutoDllPlugin = require('autodll-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

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
        filename: '[name]_[hash].js',
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

    plugins: cleanArray([
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
        }),
        new CopyWebpackPlugin([
            { from: 'static/favicon.ico' },
            { from: 'static/images', to: 'images' },
            { from: 'static/fonts', to: 'fonts' },
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
        isProd(new OfflinePlugin({
            autoUpdate: true,
            publicPath: '/',
            safeToUseOptionalCaches: true,
            caches: {
                main: [
                    'main*.js',
                    'dll/vendor*.js'
                ],
                additional: [
                    ':externals:',
                    ':rest:',
                ]
            },
            externals: [
                '/',
                'øvelser',
                'program',
            ],
            ServiceWorker: {
                navigateFallbackURL: '/',
            },
        }))
    ]),
};
