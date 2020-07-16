const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getResolvePath = (d) => path.resolve(__dirname, d);

module.exports = {
  entry: {
    // 入口配置
    main: path.resolve(__dirname, "../src/main.ts"),
  },
  output: {
    // 出口配置
    path: path.resolve(__dirname, "../dist"),
    filename: `[name].[hash:6].js`,
    chunkFilename: `js/[name].[chunkhash:6].js`,
  },
  resolve: {
    // 模块解析相关配置,
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      "@css/vars$": getResolvePath("../src/style/_variables.sass"),
      "@css/mixs$": getResolvePath("../src/style/_mixins.sass"),
    },
    extensions: [".js", ".ts", ".json", ".vue"],
  },
  optimization: {
    // 优化处理相关配置
    splitChunks: {
      chunks: "all",
      // minSize: 0,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 加载器相关配置
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // implementation: require('sass'), 默认
              sassOptions: {
                indentedSyntax: true, // sass 语法默认不支持，需要手动设置
              },
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: ["pug-plain-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|jpg|gif)/,
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
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify(process.env.APP_ENV),
      APP_MODE: JSON.stringify(process.env.APP_MODE),
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Vue-App",
      filename: "index.html",
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash:6].css",
    }),
  ],
};
