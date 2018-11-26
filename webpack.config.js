module.exports = {
    entry: './client.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: `${__dirname}/dist`, // this is optional, `dist` is the defaul
      filename: 'bundle.js'
    }
}