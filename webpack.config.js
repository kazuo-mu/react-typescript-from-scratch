const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    entry: './src/index.tsx',
    module : {
        rules : [
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}