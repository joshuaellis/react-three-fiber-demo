const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const __root = path.resolve(__dirname, '../')

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      path: path.resolve(__root, 'dist'),
      publicPath: '/',
    },
    options.output,
  ),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/**/*',
        },
      ],
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    ...options.plugins,
  ],
  devtool: options.devtool,
  devServer: options.devServer,
  target: 'web',
  performance: options.performance || {},
})
