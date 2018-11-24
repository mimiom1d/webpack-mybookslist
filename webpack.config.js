const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const BUILD_DIR = path.join(__dirname, "dist");
const APP_DIR = path.join(__dirname, "src");


const VENDOR_LIBS = [
    'react', 'react-dom', 'react-router-dom'
];
module.exports = {
    entry: {
        bundle: APP_DIR + '/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        // // ** Here above with filename, we had to change chunkhash to hash for hot loader WebpackJsonp not found issue
        // filename: '[name].[hash].js',
        // path: BUILD_DIR,
        // **Below three lines are for lazy loading setting. Make sure to change path method to resolve and add publicPath property.
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: "/"
    },
    devServer: {
        contentBase: BUILD_DIR,
        compress: true,
        port: 1337,
        disableHostCheck: false,
        // headers: {
        //     "X-Custom-header": "custom"
        // },
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ["env", "stage-0", "react"],
                        plugins: ['syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                use: [
                    {loader: "url-loader"}
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new webpack.HotModuleReplacementPlugin({}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}