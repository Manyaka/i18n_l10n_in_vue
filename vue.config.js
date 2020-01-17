const merge = require('deepmerge');

module.exports = {
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName:
            process.env.NODE_ENV === 'production'
              ? '[name]__[local]--[hash:base64:5]'
              : '[name]__[local]'
        },
        localsConvention: 'camelCaseOnly'
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) =>
        merge(options, {
          loaders: {
            i18n: '@kazupon/vue-i18n-loader'
          }
        })
      );
  }
};
