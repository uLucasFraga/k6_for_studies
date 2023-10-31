module.exports = {
  mode: 'development',
  entry:{
    fullFlowLoad: './src/simulations/fullFlowLoad.test.js',
    fullFlowStress: './src/simulations/fullFlowStress.test.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].test.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ]
  },
  stats: {
    colors: true,
    warnings: false
  },
  target: "web",
  externals: /k6(\/.*)?/,
  devtool: 'source-map',
}