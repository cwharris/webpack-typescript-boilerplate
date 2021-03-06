import * as webpack from "webpack";
import * as merge from "webpack-merge";
import baseConfig from "./webpack.config.base";

const port = process.env.POST || 8080;

export default merge(baseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin()
    ]
});
