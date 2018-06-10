const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),
];

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$|\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins,
};
