
module.exports = {
  configureWebpack: {

    resolve: {
      alias: {
        'public': 'public',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
    devtool: 'eval-source-map',

  }
}