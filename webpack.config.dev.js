const baseConfig = require('./webpack.config.base');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devServer: {
    port: 9000,
  },
};
