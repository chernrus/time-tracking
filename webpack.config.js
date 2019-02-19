'use strict';
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
      filename: "../dist/assets/bundle.js"
    },
    watch: true,
    plugins: [
      new BrowserSyncPlugin({
        host: '127.0.0.1',
        port: 8080,
        files: ['./dist/*.html'],
        server: { baseDir: ['dist'] }
      })
    ]
};
