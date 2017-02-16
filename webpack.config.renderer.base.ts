import * as path from "path";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

import { config as baseConfig } from "./webpack.config.base";

export const config = merge(baseConfig, {
    target: "electron-renderer",
    entry: {
        renderer: ["./app/renderer.ts"]
    },
    output: {
        path: path.resolve(__dirname, "app-dist"),
        filename: "renderer.js"
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
});
