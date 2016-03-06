var webpack = require ('webpack');

module.exports = {
  devtool: "eval-source-maps",
  entry:  [
    "webpack/hot/dev-server",
    __dirname + "/src/index.js"
  ],
  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js",
    publicPath: "/js/"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: __dirname + "/src",
        loader: 'babel'
      },
      {
        test: /\.less$/,
        include: __dirname + "/src",
        loader: "style!css!less"
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    contentBase: __dirname + "/public",
    stats: {
      colors: true
    },
    historyApiFallback: true,
    progress: true,
    hot: true,
    port: 3000
  }
};
