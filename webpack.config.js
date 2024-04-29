const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");

module.exports = {
  mode: 'production',
  entry: './src/offline.ts',
  output: {
    filename: 'sentry-offline.js',
    path: path.resolve(__dirname, 'dist'),
    library: "SentryOffline"
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new CompressionPlugin({
    filename: "[path][base].br",
    algorithm: "brotliCompress",
    compressionOptions: {
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      },
    },
    threshold: 10240,
    minRatio: 0.8,
    deleteOriginalAssets: false,
  })],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
};
