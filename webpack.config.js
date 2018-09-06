var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: ["babel-polyfill", "./ts/bootstrapper.ts"],
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "js"),
        filename: "bundle.js"
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
            // {
            //     //this is nodejs resolve to check node_modules and provide knockout as ko
            //     test: require.resolve("knockout"),
            //     use: [
            //         {
            //             loader: "expose-loader",
            //             options: "ko"
            //         }
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            ko: "knockout"
        })
    ]
};
