const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'docs'), // './dist'의 절대 경로를 리턴합니다.
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /node_modules/,
        }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html")
  })]
};