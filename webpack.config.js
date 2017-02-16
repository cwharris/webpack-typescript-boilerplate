"use strict";
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var merge = require("webpack-merge");
var baseConfig = {
    devtool: "inline-source-map",
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.json?$/,
                loaders: ["json-loader"],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    entry: "./app/index.tsx",
    output: {
        path: path.resolve(__dirname, "app-dist"),
        filename: "index.js"
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
exports.__esModule = true;
exports["default"] = merge(baseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});
