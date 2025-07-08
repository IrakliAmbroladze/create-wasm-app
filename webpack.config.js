const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  experiments: {
    asyncWebAssembly: true,
  },
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [new CopyWebpackPlugin(["index.html"])],
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: "webassembly/async", // Or "webassembly/sync" if you chose syncWebAssembly above
      },
    ],
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json"],
  },
};
