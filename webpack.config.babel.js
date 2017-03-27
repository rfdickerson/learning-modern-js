
// const webpack = require('webpack');
import path from 'path'
import webpack from 'webpack'

import { isProd } from './src/shared/util'

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/client/');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        filename: 'js/bundle.js',
        path: BUILD_DIR
    },
    module : {
        loaders : [
            {
                test    : /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test    : /\.scss?/,
                loader  : 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    devtool: isProd ? false : 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
         new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;
