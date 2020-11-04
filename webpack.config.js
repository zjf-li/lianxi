const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']

        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            opstions:{
                "presets": ["@babel/preset-env"]
            }
        }]
    },
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,  //! 开启热模块更新（HotModuleReplacementPlugin）
        hotOnly: true  //! 如果没有更新成功也不刷新浏览器

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin({})
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    }
}