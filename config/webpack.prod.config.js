const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '../dist')
   },
   mode: 'production',
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