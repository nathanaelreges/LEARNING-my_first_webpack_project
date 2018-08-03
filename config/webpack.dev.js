const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
   mode: 'development',
   plugins: [],
   module: {
      rules: [{
         test: /\.css$/,
         loader: 'style-loader!css-loader' 
      }]
   }
})