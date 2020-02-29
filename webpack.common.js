const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/game.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/(node_modules)/,
                loader: "babel-loader",
                query:{
                    presets: ['latest']
                }
            }
        ]
    }
}