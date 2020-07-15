const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const prodConfig = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(), //每次打包删除 resolve.path 文件夹下文件
  ],
};

module.exports = merge(baseConfig, prodConfig);
