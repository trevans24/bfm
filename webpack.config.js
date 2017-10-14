'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// file for webpack to watch
	entry: './app/index.js',
	// where to output the bundled js
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	// loaders or compilers
	module : {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          query: {
                presets: ['es2015', 'react']
            },
        }]
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader']
			},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [new HtmlWebpackPlugin({
		template: './app/index.html'
	})]
};
