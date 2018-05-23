const path = require('path');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve('./public/js'), //resolver el path de salida
		filename: 'bundle.js' // archivo js compilado
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	}
};