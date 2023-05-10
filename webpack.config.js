 const path = require('path')
 const HTMLWebpackPlugin = require('html-webpack-plugin')
 const {CleanWebpackPlugin} = require('clean-webpack-plugin')
 const MiniCssExtractPlugin = require('mini-css-extract-plugin')
 const TerserWebpackPlugin = require('terser-webpack-plugin')
 const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
 
 module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: ['@babel/polyfill' ,'./scripts/index.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin(),
        ]
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './pages/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    }

 }