const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.base')({
  mode: 'development',
  entry: [require.resolve('react-app-polyfill/ie11'), path.join(__dirname, '../src/app.js')],
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '../src/index.html'),
    }),
  ],
  performance: {
    hints: false,
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: './dist',
    watchContentBase: true,
    open: true,
    https: false,
    useLocalIp: true,
    disableHostCheck: true,
    overlay: true,
    noInfo: true,
  },
})
