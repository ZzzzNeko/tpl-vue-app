const path = require("path"); //用于处理模块路径
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack"); //用于引入webpack内的模块

const getResolvePath = d => path.resolve(__dirname, d)
const srcResolvePath = getResolvePath('../src')

module.exports = {
  entry: {
    // 入口配置
    main: path.resolve(__dirname, '../src/main.ts'),
  },
  output: {
    // 出口配置
    path: path.resolve(__dirname, "../dist"),
    filename: `[name].[hash:6].js`,
    chunkFilename: `[name].[chunkhash:6].js`,
  },
  resolve: {
    // 模块解析相关配置,
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      "@css/vars$": getResolvePath("../src/style/_variables.sass"),
      "@css/mixs$": getResolvePath("../src/style/_mixins.sass"),
    },
    extensions: ['.js', '.ts', '.json', '.vue']
  },
  optimization: {
    // 优化处理相关配置
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.vue$/,
        include: srcResolvePath,
        loader: 'vue-loader',
      },
      // 加载器相关配置
      {
        test: /\.css$/,
        // include: srcResolvePath,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        include: srcResolvePath,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        include: srcResolvePath,
        use: ['style-loader', "css-loader", {
          loader: "sass-loader",
          options: {
            // implementation: require('sass'), 默认
            sassOptions: {
              indentedSyntax: true  // sass 语法默认不支持，需要手动设置
            }
          }
        }],
      },
      {
        test: /\.pug$/,
        include: srcResolvePath,
        use: ['pug-plain-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: srcResolvePath,
        use: ["file-loader"],
      },
      {
        test: /\.(png|jpg|gif)/,
        include: srcResolvePath,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // 配置转换大小
              // fallback: 'file-loader' // 默认使用 file-loader
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 插件相关配置
    new webpack.ProgressPlugin({
      activeModules: false,
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Markdown-Editor',
      filename: 'index.html',
      template: 'public/index.html'
    }),
  ],
}