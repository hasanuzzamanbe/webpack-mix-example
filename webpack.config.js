var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_bundle.js',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    //  install older version "npm i -D uglifyjs-webpack-plugin@1.3.0"
    //will optimize build file install ind use uglify-js-webpack-plugin
    optimization: {
        minimizer: [new UglifyJsPlugin({
            "uglifyOptions":
                {
                    compress: {
                        warnings: false
                    },
                    sourceMap: true
                }
        })],
    }
}