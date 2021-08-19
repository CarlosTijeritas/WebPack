const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');


module.exports={

    mode:"production",
    output:{
        clean:true, /*Esto para que no nos este generando tanto .html cada vez que hacemos una modificacion*/
        filename:'main.[fullhash].js'
    },
    module:{
        rules:[
            {
                test:/\.html$/i, /*Expresion regular,la i indica que no importa las mayusculas y minusculas*/
                use:[{
                    loader: 'html-loader',
                    options:{
                        sources:false
                    }
                    }
                ]
            },
            {
                test:/\.css$/,
                exclude:/styles.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/styles.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.(png|jpg?e|gif)$/,
                loader:'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]      
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html',
            filename:'./index.html' /*Le podmeos cambiar el nombre al archivo*/
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[fullhash].css',
            ignoreOrder:false
        }),
        new CopyPlugin({
           patterns:[
                {from: './src/assets',to:'assets/'}
           ]
        })
    ]

    


}