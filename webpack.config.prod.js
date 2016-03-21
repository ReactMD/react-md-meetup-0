/* by prod, we really just mean this is the build for gh-pages */

module.exports = {
  entry:__dirname + "/src/index.js",
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
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: "url-loader?mimetype=image/png"
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
