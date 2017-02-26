const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './js/index'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'assets/js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({template: 'index.html'})
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8089
    }
};

module.exports = config;