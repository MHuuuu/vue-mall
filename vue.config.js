const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/vue-test' : '/'

module.exports = {
  baseUrl: BASE_URL,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  // 颗粒化Webpack
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
    const types = ['vue', 'less']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    // proxy: 'http://localhost:4000'
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'static/less/variables/*.less')
      ]
    })
}
