import * as path from "path";
import * as webpack from "webpack";
import * as merge from "webpack-merge";

import { config as baseConfig } from "./webpack.config.base";

export const config = merge(baseConfig, {
    target: "electron-main",
    entry: {
        main: "./app/main.ts"
    },
    output: {
        path: path.resolve(__dirname, "app-dist"),
        filename: "[name].js"
    },
});
