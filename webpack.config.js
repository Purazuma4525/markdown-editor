const path = require('path')

module.exports = {
  mode: "production",
  entry: './src/index.tsx',
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
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  },
  devServer: {
    devMiddleware:{
    publicPath: '/dist/',
  },

    hot: true,
    open: true,
    
    
  },
    performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  }
}