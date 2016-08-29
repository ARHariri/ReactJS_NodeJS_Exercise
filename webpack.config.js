var webpack = require('webpack');
var path = require('path');

var config = {
   entry: {
      app: [
         'webpack-dev-server/client?http://localhost:8005',
         'webpack/hot/only-dev-server',
         './main.js'
      ]
   },
	
   output: {
      path: path.join(__dirname, './dist'), // This path should be absolute
      filename: 'bundle.js',
      publicPath: '/dist/'       // Where we want webpack to serve other static assets from like images css etc
   },

   devtool: "source-map",

	plugins: [
      new webpack.HotModuleReplacementPlugin()
   ],

   resolve: {
      extensions: ['', '.js', '.jsx']
   },
	
   module: {
      loaders: [
         {
            loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
            test: /\.jsx?$/,
            exclude: /node_modules|server/,
         },
         {
            test: /.css$/,
            loader: "style!css?module&sourceMap&localIdentName=[path]_[name]_[local]_[hash:base64:3]"
         }
      ]
   }
};

module.exports = config;