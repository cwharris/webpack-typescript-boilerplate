import * as url from "url";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import { RestartElectronPlugin } from "./webpack/RestartElectronPlugin";

import { config as baseConfig } from "./webpack.config.main.base";

import { port } from "./webpack.config.renderer.dev";

const appUrl: url.Url = {
    pathname: `localhost:${port}/index.html`,
    protocol: "http:",
    slashes: true
};

export default merge(baseConfig, {
    plugins:[
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.DefinePlugin({
            "process.env.APP_URL": JSON.stringify(appUrl)
        }),
        new RestartElectronPlugin("./app-dist/main.js")
    ]
});
