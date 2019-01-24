const packageConfig = require('./package.config');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-for': {},
    'postcss-atrule-bem': {},
    'postcss-cssnext': {},
    'postcss-nested': {},
    'postcss-merge-rules': {},
    'postcss-header': {
      header: packageConfig.banner,
    },
    stylefmt: {},
  },
};
