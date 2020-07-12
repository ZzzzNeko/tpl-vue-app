const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(), //每次打包删除 resolve.path 文件夹下文件
  ],
};
