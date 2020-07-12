const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

module.exports = (env, argv) => {
  console.log("mode ", argv.mode);
  const isProd = argv.mode == "production";
  const isDev = argv.mode == "development";
  // @ts-ignore
  if (isProd) return merge(baseConfig, prodConfig);
  // @ts-ignore
  if (isDev) return merge(baseConfig, devConfig);
};
