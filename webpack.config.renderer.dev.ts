import * as webpack from "webpack";
import * as merge from "webpack-merge";

import { config as baseConfig } from "./webpack.config.renderer.base";

export const port = process.env.PORT || 8080;

export default merge(baseConfig, {
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        port: port
    },
    entry: {
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});
