const { resolve } = require('path');

const getPort = require('get-port');

const { WebpackPluginServe: Serve } = require('../../../lib/');

module.exports = {
  context: __dirname,
  entry: ['./app.js', 'webpack-plugin-serve/client'],
  mode: 'development',
  output: {
    filename: './output.js',
    path: resolve(__dirname, './output'),
    publicPath: 'output/'
  },
  plugins: [
    new Serve({
      headers: {
        'X-Superhero': 'batman'
      },
      host: 'localhost',
      port: getPort({ port: 55555 }),
      log: { level: 'debug' },
      ramdisk: true
    })
  ],
  resolve: {
    alias: {
      'webpack-plugin-serve/client': resolve(__dirname, '../../../client')
    }
  },
  watch: true
};
