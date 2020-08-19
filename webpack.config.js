const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/form.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/', //comment out for publishing
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
		],
	},
};