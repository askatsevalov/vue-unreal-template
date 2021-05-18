/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const isDev = process.env.NODE_ENV === "development";

const port = process.env.port || process.env.npm_config_port || "8080";
const apiHost = process.env.VUE_APP_API_HOST || "localhost";
const apiPort = process.env.VUE_APP_API_PORT || "9090";
const apiUrl = process.env.VUE_APP_API_BASE_URL;

const name = "Vue Kats Template";

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  lintOnSave: isDev,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/mixins.scss";`,
      },
    },
  },
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      [`/${apiUrl}`]: {
        target: `http://${apiHost}:${apiPort}/${apiUrl}`,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          [`^/${apiUrl}`]: "",
        },
      },
    },
  },
  configureWebpack: {
    name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: isDev,
        __PROD__: !isDev,
      }),
    ],
  },
  chainWebpack(config) {
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    config.when(isDev, (config) => config.devtool("cheap-source-map"));

    config.when(!isDev, (config) => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial",
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/shared"),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk("single");
    });
  },
};
