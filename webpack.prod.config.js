const path = require('path');
const webpack = require('webpack');
const _config = require('./config');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
    path.join(__dirname, '/app/index.js')
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },

  resolve: {
    alias: {
      configVariables: path.join(__dirname, 'config-variables.js'),
      fxns: path.join(__dirname, 'utils/fxns.js'),
      meetupsData: _config.paths.data_path,
      prtls: path.join(__dirname, 'app/components/partials'),
      style: _config.paths.style_path
    },
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'style')
    ]
  },

  plugins: [
    require('precss'),
    require('autoprefixer'),
    new webpack.ProvidePlugin({
      configVariables: 'configVariables'
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: /style/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              path: 'postcss.config.js',
              sourceMap: 'inline',
            }
          }
        ]
      },
      {
        test: /\.png$/,
        loader: 'file'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      }
    ]
  }
}
