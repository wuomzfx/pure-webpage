var path = require('path')
var utils = require('./utils')
var config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: utils.getEntries(),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: utils.getAssetsPublicPath()
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        options: {
          interpolate: true,
        }
      },
      {
        test: /\.(html)$/,
        loader: 'html-layout-loader',
        include: [resolve('src/entries')],
        options: {
          layout: config.layout.html
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        oneOf: [
          {
            issuer: /\.html$/,
            loader: 'url-loader',
            options: {
              limit: 1, // 为了让后端好套页面，html内引入的资源文件一律不使用base64
              name: utils.assetsPath('img/[name].[hash:7].[ext]', true)
            }
          },
          {
            issuer: /\.(css|less)$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
