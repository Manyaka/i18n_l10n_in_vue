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
  productionSourceMap: false
};
