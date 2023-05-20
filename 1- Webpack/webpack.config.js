const path = require('path');
// to send html in webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
// to compress for css files
const TerserPlugin = require("terser-webpack-plugin");
/////////
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './new.js',
  output: {
    path: path.resolve(__dirname, 'production'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
    {
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    }
  ),
  // to create css in production
  new MiniCssExtractPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  
  devServer:{
    // contentBase: path.join(__dirname, 'production'),
    compress: true,
    port: 9000,
    static:
    {
      directory: path.join(__dirname, 'production')
    }
  }
};