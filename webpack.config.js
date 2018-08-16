var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./ts/bootstrapper.ts",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "bundle.js",
    library: 'dcseIapecs'
    // publicPath: "/dist"
  },
  module: {
    rules: [
      //   {
      //     enforce: "pre",
      //     test: /\.tsx?$/,
      //     loader: "tslint-loader",
      //     exclude: /node_modules/,
      //     options: {
      //       failOnHint: true,
      //       configuration: require("./ts/tslint.json")
      //     }
      //   },
      //   {
      //     test: /\.css$/,
      //     use: ["style-loader", "css-loader"],
      //     exclude: /node_modules/
      //   },
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
  //   plugins: [
  //     new webpack.optimize.UglifyJsPlugin({
  //       // ...
  //     })
  //   ]
};
