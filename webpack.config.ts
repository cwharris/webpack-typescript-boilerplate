import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as merge from "webpack-merge";

const baseConfig: webpack.Configuration = {
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

export default merge(baseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});
