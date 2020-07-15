const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base');

module.exports = {
  ...baseConfig,
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      AnalyserNode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html',
    }),
  ],
};
