const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: 'sw.js'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/manifest.json",
                    to: "manifest.json"
                },
                {
                    from: "./src/assets/favicon.ico",
                    to: "./imgs/favicon.ico"
                },
                {
                    from: "./src/assets/pokemon-app-icon-128.png",
                    to: "./imgs/pokemon-app-icon-128.png"
                },
                {
                    from: "./src/assets/pokemon-app-icon-512.png",
                    to: "./imgs/pokemon-app-icon-512.png"
                }
            ]
        })
    ],
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
};