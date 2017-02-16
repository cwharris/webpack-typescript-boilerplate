import * as path from "path";
import * as webpack from "webpack";

export const port = process.env.PORT || 8080;

export const config: webpack.Configuration = {
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
    output: {
        path: path.resolve(__dirname, "app-dist"),
        filename: "[name].js"
    },
};
