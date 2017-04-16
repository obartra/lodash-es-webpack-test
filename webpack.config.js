const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    all: './index.js',
    direct: './index.direct.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        { loader: 'babel-loader' }
      ]
    }]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].built.js'
  },
  plugins: [
    new UglifyJSPlugin({
      fromString: true,
      compress: {
        keep_fnames: true,
        collapse_vars: true,
        negate_iife: false,
        pure_getters: true,
        unsafe: true,
        warnings: false
      },
      beautify: {
        'indent-level': 2
      }
    })
  ]
};
