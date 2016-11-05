module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'index.js',
		publicPath: ''
	},
	devServer: {
		inline: true,
		port:3333
	},
	devtool: 'source-map',
	module: {
		loaders:[
		  		{ 
		  			// test: /\.css$/, 
		  			// loader: "style-loader!css-loader" 
		  			test: /\.scss$/,
        			loaders: ["style", "css", "sass"]
		  		},

				{
				 	test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				  	exclude: /\/favicon.ico$/,
				  	loader: 'file',
				  	query: {
				   		name: 'static/media/[name].[hash:8].[ext]'
				  	}
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel',
					query: {
						presets: ['es2015', 'react']
					}
			}
		]
	}
}