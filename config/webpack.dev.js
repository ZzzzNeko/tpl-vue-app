const webpack = require("webpack"); //用于引入webpack内的模块
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map", // source map 相关配置
  devServer: {
    // webpack-dev-server 相关配置
    hot: true,
    stats: {
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      color: true,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR 插件
    new webpack.NamedModulesPlugin(), // 开启 HMR 时显示模块相对路径
    new FriendlyErrorsPlugin(),
  ],
};

module.exports = merge(baseConfig, devConfig);
