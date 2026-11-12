var path = require('path');

module.exports = {
		mode: 'development',
		entry: './index',
		resolve: {
				extensions: ['.ts', '.js', '.scss']
		},
		output: {
				path: path.join(__dirname, 'dist'),
				filename: "bundle.js"
		},
		module: {
				rules: [
						{
								test: /\.ts$/,
								loader: 'ts-loader'
						},
						{
								test: /\.scss$/,
								exclude: /node_modules/,
								loader: 'raw-loader!sass-loader'
						}
				]
		}
};

