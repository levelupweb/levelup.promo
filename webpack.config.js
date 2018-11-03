const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/public/`,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        include: [path.resolve(__dirname, "src")],
        test: /\.jsx?$/,
        query: {
          plugins: [
            "transform-runtime",
            ["transform-object-rest-spread", { useBuiltIns: true }]
          ],
          presets: ["env", "react", "latest"]
        }
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader?importLoaders=1"]
      },
      {
        test: /\.(ttf|eot|svg|woff)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
