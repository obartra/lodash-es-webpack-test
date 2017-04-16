module.exports = {
  entry: {
    all: './index.js',
    direct: './index.direct.js'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].built.js'
  }
};
