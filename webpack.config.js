const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    build: path.join(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.resolve('dist'),
    filename: '[NAME].js'
  },
  devServer: {
    contentBase: './public',
    hot: true,
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
    historyApiFallback: {
      index: 'index.html'
    }
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          experimentalWatchApi: true
        }
      },
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  }
}
