var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./app/index.js',
  output: {
    path : path.resolve(__dirname,'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
   },
   module: {
     rules: [
       { test: /\.(js)$/, use: 'babel-loader' },
       { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
     ]
   },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
{
test: /\.css$/,
use: ['style-loader', 'css-loader']
},

      { test: /\.js$/, use: 'babel-loader' }
    ]

},
plugins: [new htmlWebpackPlugin({
template:'app/index.html'
})]
}
