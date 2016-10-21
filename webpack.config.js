/**
 * Created by charlesbrown-roberts on 10/18/16.
 */
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: [
        __dirname + "/src/_assets/styles/scss/entry.scss",
        __dirname + "/src/_assets/js/entry.js"
    ],
    output: {
        path: __dirname + "/dist/assets",
        filename: "app.bundle.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
    module: {
        loaders: [
            // serve jQuery for Bootstrap scripts:
            // Bootstrap 4
            { test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, loader: 'imports?jQuery=jquery' },
        ],
    },
};