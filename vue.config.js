const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("sass")
      .test(/\.sass$/)
      .use("sass-loader")
      .loader("sass-loader")
      .loader("css-loader")
      .loader("style-loader")
      .end();
  },
};
