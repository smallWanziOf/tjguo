const path = require('path'),
  webpack = require('webpack'),
  node_modules_dir = path.join(__dirname, 'node_modules'),
  src_dir = path.join(__dirname, 'src'),
  deps = [
  ],
  config = {
    entry: {
      desktop: path.resolve(src_dir, 'desktop/index.js'),
      mobile: path.resolve(src_dir, 'mobile/index.js')
    },
    resolve: {
      alias: {}
    },
    output: {
      publicPath: "/build/",
      path: path.resolve(__dirname, 'build'),
      filename: '[name].bundle.js',
    },
    plugins:[
    ],
    module: {
      exprContextCritical: false,
      noParse: [],
      loaders: [{
        test: /\.jsx?$/,
        loader: ['babel'],
        query: {
          presets: ['react',  'es2015' , 'stage-0'],
          "plugins": [
            ["import", { libraryName: "antd", style: true}]
          ]
        },
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      },{
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 108192,
          name: 'images/[name].[hash:8].[ext]'
        }
      }]
    }
  };
deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
