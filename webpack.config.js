const path = require('path')

module.exports = {
  entry: path.resolve('./src/App.js'),
  output: {
    path: path.resolve('public/build'),
    filename: 'app.js'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      views: path.resolve(__dirname, './src/views'),
      src: path.resolve(__dirname, './src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },{
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file-loader'
      }
    ]
  },
  devtool: 'source-map'
}
