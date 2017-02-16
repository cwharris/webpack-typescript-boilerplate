import * as path from "path";
import * as webpack from "webpack";
import * as merge from "webpack-merge";

import { config as baseConfig } from "./webpack.config.base";

export const config = merge(baseConfig, {
    target: "electron-main",
    entry: "./app/main.ts",
    output: {
        path: path.join(__dirname, "app-dist"),
        filename: "main.js"
    }
});
