const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.tsx",
  output: {
    path: `${__dirname}/docs/`,
    filename: "js/bundle.js",
  },
  mode: "development",
  devtool: "source-map",

  devServer: {
    static: {
      directory: "./docs/",
    },
    watchFiles: ["src/**/*"],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /(\.ts|\.tsx)$/,
        use: "ts-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
