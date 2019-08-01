// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const modules = [
  '@nuxtjs/proxy',
  '@nuxtjs/vuetify',
]

// if (process.env.NODE_ENV === 'production') {
//   modules.push('@nuxtjs/pwa')
// }

module.exports = {
  // Headers of the page
  head: {
    title: 'SMART COLLEGE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', content: 'SMART COLLEGE project' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'theme-color', content: '#0ff5' },
      { name: 'fragment', content: '!' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'msapplication-TileImage', content: 'smartc.png' },
      { name: 'msapplication-TileColor', content: '#da532c' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { rel: 'stylesheet', type: 'text/css', href: 'iconfont/material-icons.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'iconfont/font-awesome.css' },
    ],
  },

  // Global CSS
  // css: [
  //   { src: '~/assets/scss/main.scss', lang: 'scss' },
  // ],

  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#3B8070',
  //   background: '#1e62ab',
  // },

  server: {
    port: 9009,
  },

  // Build options
  mode: 'spa',
  modern: 'client',

  // render: {
  //   resourceHints: false,
  // },

  router: {
    mode: 'hash',
  },

  // build: {
  //   analyze: process.env.NODE_ENV !== 'production',
  //   // maxChunkSize: 500000,
  //   extractCSS: true,
  //   publicPath: process.env.NODE_ENV !== 'production' ? '/_nuxt/' : 'nuxt/',
  //   distDir: 'www',
  //   // vendor: [
  //   //   // 'axios',
  //   //   'vuetify',
  //   // ],
  // },

  // build: {
  //   plugins: [
  //     new VuetifyLoaderPlugin(),
  //   ],
  // },

  plugins: [
    // '~/plugins/cordova',
    // '~/plugins/i18n',
    // '~/plugins/vuetify',
    // '~/plugins/axios',
    // '~/plugins/socket',
    // '~/plugins/xenex',
    // '~/plugins/panzoom',
    // '~/plugins/c3',
    // '~/plugins/google-maps',
  ],

  // generate: {
  //   dir: 'www',
  // },

  modules,

  proxy: {
    '/api': 'http://localhost:7009',
    '/files': 'http://127.0.0.1:7009',
    ws: true,
  },
}
