const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry : "./src/js/index.js",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname,"./dist"),
        clean : true
    },
    devtool : "source-map",
    mode : "development",
    devServer: {
        host : "localhost",
        port : 8082,
        open : true,
        watchFiles : 'index.html' //변화를 지켜보면서 자동으로 반영해줌
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : "keyboard",
            template : "./index.html",  //lodash문법을 사용할 수 있게 함
            inject : "body", //파일을 빌드했을 때 Js파일을 바디에 넣어줌
            favicon : "./favicon.png" 
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module:{
        rules:[ //css파일을 css-loader 를 사용하여 읽겠다.
            {
                test: /\.css$/,
                use : [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    optimization : {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    }
}