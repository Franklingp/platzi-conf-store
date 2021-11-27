//webpack config
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenvWebpack = require("dotenv-webpack");
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    "css-loader",
                ]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new miniCssExtractPlugin({
            filename: "assets/[contenthash].css"
        }),
        new dotenvWebpack(),
        // new CopyPlugin({
        //     patterns: [
        //         { from: 'public/manifest.json', to: '' },
        //         { from: 'public/service-worker.js', to: '' },
        //         { from: 'public/icon.png', to: 'assets' },
        //     ],
        // }),
    ],

    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 8080
    }
}