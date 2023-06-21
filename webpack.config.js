const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const devtool = devMode ? 'inline-source-map' : undefined;

module.exports = {
  mode,
  devtool,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'src/assets', 'favicon.ico'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
};