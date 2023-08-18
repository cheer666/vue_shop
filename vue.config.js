// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   proxy: {
//     '/api': {
//       //   target: 'http://canzg-wsl.itheima.net/enterpise',
//       // target: 'http://172.17.0.60:8200',
//       //target: process.env.VUE_APP_URL,
//       target: process.env.VUE_APP_URL,
//       ws: false,
//       secure: false,
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': ''
//       }
//     }
//   },
// })
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {

    port: 9000,
    open: true,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    client: {
      overlay: {
        runtimeErrors: false,
      },
    },
    proxy: {
      '/api': {
        //   target: 'http://canzg-wsl.itheima.net/enterpise',
        // target: 'http://172.17.0.60:8200',
        //target: process.env.VUE_APP_URL,
        target: process.env.VUE_APP_URL,
        ws: false,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // before: require('./mock/mock-server.js')
  }
})
