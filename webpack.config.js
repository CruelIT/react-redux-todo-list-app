const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const rimraf = require('rimraf');

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
        {
            apply: (compiler) => {
                rimraf.sync(compiler.options.output.path);
            }
        },
        new HtmlWebpackPlugin({template: 'index.html'})
    ]
};

module.exports = config;