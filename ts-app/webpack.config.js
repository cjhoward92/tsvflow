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
  // This is really important with the ts-loader or webpack will
  // never find the .js files that are built in the bundle
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
