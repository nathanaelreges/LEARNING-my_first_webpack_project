const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist')
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: './src/main.html',
         /*minify: {
            removeComments: false,
            collapseWhitespace: true
        }*/
      })
   ]
}