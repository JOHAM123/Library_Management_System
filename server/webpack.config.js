var path = require('path');
var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        main: './src/index',
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    output: {
        publicPath: "/",
        path: path.join(__dirname, '/build/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'

            }
        ]
    },
    plugins: [
    new HtmlWebPackPlugin({
        template: "./index.html",
        filename: "index.html"
      }),
    ],
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()], 
};
