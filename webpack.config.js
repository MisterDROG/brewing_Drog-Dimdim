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
        index: ['@babel/polyfill' ,'./scripts/index.js'],
        classification: ['@babel/polyfill' ,'./scripts/classification.js'],
        where: ['@babel/polyfill' ,'./scripts/where.js'],
        glasses: ['@babel/polyfill' ,'./scripts/glasses.js'],
        shop: ['@babel/polyfill' ,'./scripts/shop.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext]'
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
            filename: 'index.html',
            template: './pages/index.html',
            chunks: ['index'],
            minify: {
                collapseWhitespace: true
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'classification.html',
            template: './pages/classification.html',
            chunks: ['classification'],
            minify: {
                collapseWhitespace: true
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'shop.html',
            template: './pages/shop.html',
            chunks: ['shop'],
            minify: {
                collapseWhitespace: true
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'where.html',
            template: './pages/where.html',
            chunks: ['where'],
            minify: {
                collapseWhitespace: true
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'glasses.html',
            template: './pages/glasses.html',
            chunks: ['glasses'],
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
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