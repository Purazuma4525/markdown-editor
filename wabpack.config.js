const path = require('path')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js','.ts','.tsx'],
  },
  // alias: {
  //     "~": path.resolve(__dirname, "/src"),
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'index.js',
    publicPath:'dist/',
  }
}