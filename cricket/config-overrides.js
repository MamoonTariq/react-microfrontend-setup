const { override, babelInclude } = require("customize-cra");
const path = require("path");

const addRunTimeChunkOptimize = (config) => {
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };

  config.output.filename = "static/js/[name].js";

  config.plugins[5].options.filename = "static/css/[name].css";
  config.plugins[5].options.moduleFilename = () => "static/css/main.css";
  return config;
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  webpack: override(
    babelInclude([
      path.resolve("src"),
      path.resolve("../ui-tools"),
      path.resolve("../shared"),
    ]),
    addRunTimeChunkOptimize
  ),
};
