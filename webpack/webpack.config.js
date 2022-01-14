const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCss = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const optimizeCSSAssestPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new optimizeCSSAssestPlugin({})
        ]
    },

    plugins: [
        new miniCss({
            filename: "estilo.css"
        })
    ],
    
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use:[
                miniCss.loader,
              //da conflito co o miniCss  //'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: ['file-loader']
        }]
    }
}