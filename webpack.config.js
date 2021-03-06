const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('cssnano');

const argv = require('yargs').argv;
const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;

module.exports = {
	mode: 'production',
	entry: {
		main: './src/index.js',
		// store: './src/store/index.js',
		// reducers: './src/reducers/index.js',
		// containers: './src/containers/app.js',
		// actions: './src/actions/index.js',
	},		
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
  	},
  	optimization: {
	    splitChunks: {
	      chunks: 'all'
	    }
	},
 	module: {
	  	rules: [
		    {
		      	test: /\.m?js$/,
		      	exclude: /(node_modules|bower_components)/,
		      	use: {
			        loader: 'babel-loader',
			      }
		    },
		    {
		    	test: /\.css$/,
			    exclude: /node_modules/,
			    use: [
			        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
			        'css-loader',
			        {
			          loader: 'postcss-loader',
			          options: {
			            plugins: [
			              isProduction ? require('cssnano') : () => {},
			              require('autoprefixer')({
			                overrideBrowserslist: ['last 2 versions']
			              })
			            ]
			          }
			        }
			    ]
		    }
	  	]
 	},
  	plugins: [
	    new MiniCssExtractPlugin({
	      	filename: '[name].css',
      		chunkFilename: '[id].css',
	    }),
	    //require('cssnano')({ preset: 'default' })
  	],
    optimization: {
	    minimizer: [
	    	new UglifyJsPlugin({
		        sourceMap: true,
		        uglifyOptions: {
			        compress: {
			            inline: false,
			            drop_console: true
		          		},
		        	},
		      	}),
		    new OptimizeCSSPlugin({
			        cssProcessorOptions: {
			          "preset": "advanced",
			          "safe": true,
			          "map": { "inline": false },
			        },
		      	}),
		    ],
  	},
  	
};

