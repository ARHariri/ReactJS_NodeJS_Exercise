var webpack = require('webpack');
var path = require('path');

var config = {
   entry: [
      'webpack-dev-server/client?http://localhost:8000',
      './main.js'
   ],
	
   output: {
      path: path.join(__dirname, './dist'), // This path should be absolute
      filename: 'bundle.js',
      publicPath: '/dist/'       // Where we want webpack to serve other static assets from like images css etc
   },

   devtool: "eval",

	plugins: [
    new webpack.HotModuleReplacementPlugin()
   ],

   devServer: {
      inline: true,
      hot: true,
      port: 8000
   },

   resolve: {
      extensions: ['', '.js', '.jsx']
   },
	
   module: {
      loaders: [
         {
            loader: 'babel',
            test: /\.jsx?$/,
            exclude: /node_modules/,
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
};

module.exports = config;