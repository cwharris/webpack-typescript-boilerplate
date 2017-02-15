import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
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
    entry: "./app/index.ts",
    output: {
        path: path.resolve(__dirname, "app-dist"),
        filename: "index.js"
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};

export default config;
