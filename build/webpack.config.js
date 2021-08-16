/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "../packages/cris-ui/index.ts"),
  output: {
    path: path.resolve(__dirname, "../lib"),
    publicPath: "/",
    filename: "index.js",
    libraryTarget: "umd",
    libraryExport: "default",
    library: "CrisUi",
    umdNamedDefine: true,
  },
  stats: "verbose",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        // todo remote
        test: /\.(sass|scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
  },
  plugins: [new VueLoaderPlugin()],
};
