import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  devtool: 'source-map',
  mode: 'production',
  entry: "./src/index.js",
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: "[name].[chunkhash].js",
  },
  plugins: [

    new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].js"
    }),

    new HtmlWebpackPlugin({
      template: "src/index.html",
      })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: [MiniCssExtractPlugin.loader,'css-loader']}
    ]
  }
}
