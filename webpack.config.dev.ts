import * as path from "path";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import baseConfig from "./webpack.config.base";

const port = process.env.POST || 3000;

export default merge(baseConfig, {
    entry: "./index.ts",
    output: {
        publicPath: `http://localhost:${port}/dist/`
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});