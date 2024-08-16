const path = require('path');

module.exports = {
  mode: 'development', // or 'production' for production builds
  entry: './landing_page/index.js', // Ensure this path is correct for your project
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
