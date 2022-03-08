const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "assests", "javascript"),
        publicPath: "assests/javascript"
    }
    // plugins: [
    //         new CleanPlugin.CleanWebpackPlugin()
    //     ]
    // devServer: {
    //     contentBase:
    // }
};