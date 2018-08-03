const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '../dist')
   },
   mode: 'production',
   optimization: {
      minimizer: [
         new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
         }),
         new OptimizeCSSAssetsPlugin()
      ]
   },
   plugins: [
      new MiniCSSExtractPlugin()
   ],
   module: {
      rules: [{
         test: /\.css$/,
         use: [{
            loader: MiniCSSExtractPlugin.loader
         },
            'css-loader'
         ]
      }]
   }
};