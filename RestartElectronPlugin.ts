import * as electron from "electron";
import * as webpack from "webpack";
import * as electon from "electron";
import * as path from "path";
import * as child_process from "child_process";

export class RestartElectronPlugin {

    private _filename: string;
    private _child: child_process.ChildProcess = null;

    constructor (filename: string, kill: boolean = true) {
        this._filename = filename;
    }

    apply(compiler: webpack.Compiler): void {
        compiler.plugin("after-emit", (_, next: Function) => {

            if (this._child) {
                this._child.kill();
            }

            this._child = child_process.spawn(
                electron as any,
                [this._filename],
                { "stdio": "inherit" });

            this._child.on("exit", () => {
                process.exit();
            });

            this._child.on("SIGINT", (error: any) => {
                console.log(error);
                process.exit();
            });

            next();
        });
    }
}
