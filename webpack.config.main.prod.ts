import * as path from "path";
import * as url from "url";
import * as webpack from "webpack";
import * as merge from "webpack-merge";

import { config as baseConfig } from "./webpack.config.base";

const appUrl: url.Url = {
    pathname: path.join(__dirname, "app-dist/index.html"),
    protocol: "http:",
    slashes: true
};

export default merge(baseConfig, {
    devtool: "cheap-module-eval-source-map",
    output: {
        path: path.join(__dirname, "app-dist"),
        filename: "main.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.DefinePlugin({
            "process.env.APP_URL": JSON.stringify(appUrl)
        })
    ]
});
