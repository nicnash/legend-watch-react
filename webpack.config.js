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
	module: {
		loaders:[
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