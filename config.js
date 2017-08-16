const path = require('path');

module.exports = {
  paths: {
    data_path: path.join(__dirname, 'data/meetups.js'),
    index_path: path.join(__dirname, 'index.html'),
    public_path: path.join(__dirname, 'public'),
    style_path:  path.join(__dirname, 'style/main.scss'),
    sw_path:  path.join(__dirname, 'service-worker.js')
  }
};
