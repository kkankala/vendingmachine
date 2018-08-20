var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: ["babel-polyfill", "./ts/bootstrapper.ts"],
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "js"),
        filename: "bundle.js"
        // library: 'dcseIapecs'
        // publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"],
                            plugins: ["transform-runtime"]
                        }
                    },
                    {
                        loader: "ts-loader"
                    }
                ]                
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
