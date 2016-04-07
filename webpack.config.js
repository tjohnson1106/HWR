 var webpack = require('webpack');
  
  module.exports = {
     entry: [
         './src/index.js'
     ],
     module: {
         loaders: [{
             exclude: /node_modules/,
             loader: 'react-hot!babel'
         }]
     },
     resolve: {
         extensions: ['', '.js']
     },
     output: {
         path: 'dist',
         publicPath: '/',
         filename: 'bundle.js'
     },
     devServer: {
         contentBase: './dist',
         hot: true
     },
     plugins: [
         new webpack.HotModuleReplacementPlugin()
     ]
 };