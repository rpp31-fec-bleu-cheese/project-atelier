const path = require('path');
const webpack = require('webpack');

const entry_dir = path.join(__dirname, 'client/src/index.js');
const output_dir = path.join(__dirname, 'client/dist');

module.exports = {
  entry: entry_dir,
  output: {
    filename: 'bundle.js',
    path: output_dir,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};