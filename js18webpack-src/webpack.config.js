const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminJpegtran = require('imagemin-jpegtran');
const imageminSvgo = require('imagemin-svgo');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js',
        publicPath: '/dist'
    },
    devServer: {
        open: true
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css'}),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/assets/image',
                    to: 'image'
                }
            ]
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngqins: ({quality: 80}),
            plugins: [
                imageminJpegtran({
                    quality:73,
                    progressive: true
                }),
                imageminPngquant({
                    quality: [0.6, 0.8]
                }),
                imageminSvgo({
                    plugins:[
                        {removeViewBox: false}
                    ]
                }),
                imageminGifsicle({
                    lossy: 80
                })
            ]
            })  
          
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /.(scss|sass)$/,
                use: ['style-loader', MiniCssExtractPlugin.loader,'css-loader', 
                {
                    loader: 'postcss-loader',
                    options:   {
                        config: {path: 'src/js/postcss.config.js'}
                    }
                },
                'sass-loader']
            }
        ]
    },
    
};