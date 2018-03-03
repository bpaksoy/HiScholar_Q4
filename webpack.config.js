const webpack = require('webpack');
const path = require('path');
const CommonsChunkPlugin = new require('webpack/lib/optimize/CommonsChunkPlugin');
const chunks = ['app'];
const config = require('./package.json');

module.exports = {

	entry: {
		app: ['babel-polyfill','./src/index.js']
	},
	output: {
		path: __dirname+'/public/dist',
		filename: 'bundle/[name].js',
    sourceMapFilename: 'bundle/[name].map',
		publicPath: '/'
	},
	devServer: {
    historyApiFallback: true,
  },
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	devtool: '#source-map',
	plugins: process.env.NODE_ENV === 'production' ? [
		new CommonsChunkPlugin({
			name: 'commons',
			chunks: chunks
		}),
		new webpack.ProvidePlugin({
        'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
	    new webpack.DefinePlugin({
	        'process.env': {
	        	'NODE_ENV': JSON.stringify('production')
	        }
	    }),
    	new webpack.optimize.UglifyJsPlugin({
    		minimize: true,
		    compress: {
		        warnings: false,
		        drop_console: true
		    }
    	})
	] : [
		new CommonsChunkPlugin({
			name: 'commons',
			chunks: chunks
		})
	],
<<<<<<< HEAD
	resolve: {
		 modules: [path.resolve(__dirname, "src"), "node_modules"]
	},
=======
	node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty'
  },
>>>>>>> 4e61d2e74ef6383ae0113522b40fe79f7fb73af6
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			},
			{
		        test: /\.json$/,
		        loader: 'json-loader'
		    },
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]',
					outputPath: 'images/',
					publicPath: (config.server) ? '/' : 'public/dist/',
					useRelativePath: false
				}
			}
		]
	}
}
