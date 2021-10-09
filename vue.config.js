module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',

      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            viewportWidth: 375,   //视图的宽度，对应设计稿宽度
            viewportHeight: 667,  //视图高度
            unitPrecision: 5,     //指定px转换为视窗单位值的小数数位
            viewportUnit: 'vw',   //指定需要转换成的视窗单位，建议vw
            // selectorBlackList: [''],  //指定不需要转换的类
            minPixelValue: 1,     //小于或等于1px不转换为视窗单位
            mediaQuery: false,    //允许在媒体查询中转换px
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api-hmugo-web.itheima.net/api/public',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
