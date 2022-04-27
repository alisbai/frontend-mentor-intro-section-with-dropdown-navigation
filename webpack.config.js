const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
            }),
            new CleanWebpackPlugin()
],
    module: {
        rules: [
        {
            test: /\.html$/i,
            loader: "html-loader"
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource"
          },
        ]
    }

}