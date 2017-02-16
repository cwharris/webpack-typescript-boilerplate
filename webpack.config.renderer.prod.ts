import * as webpack from "webpack";
import * as merge from "webpack-merge";

import { config as baseConfig } from "./webpack.config.renderer.base";

export default merge(baseConfig, {
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ]
});
