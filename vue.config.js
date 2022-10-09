const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/book':{
        target:'http://androidapi.junshishu.com',
        changeOrigin:true,
        pathRewrite:{
          '':''
        }
      },
      '/htm':{
        target:'http://androidapi.junshishu.com',
        changeOrigin:true,
        pathRewrite:{
          '':''
        }
      }
    }
  }
})