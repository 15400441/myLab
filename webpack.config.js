var path = require('path');
var webpack = require('webpack');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   target: 'node',
   node: {
      fs: 'empty',
      child_process: 'empty',
      net : "empty"
   },
   output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'main.js'
   },
   module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};
