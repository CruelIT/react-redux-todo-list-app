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
    }
};

module.exports = config;