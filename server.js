const path = require('path');
const express = require('express');
const _config = require('./config');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = _config.paths.index_path;
    const swPath = _config.paths.sw_path;
    const publicPath = express.static(_config.paths.public_path);

    app.get('/public/bundle.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Cache-Control', 'public, max-age=86400000');
      res.set('Content-Encoding', 'gzip');
      next();
    });

    // loader
    app.get('/public/css/loader.css', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Type', 'text/css');
      res.set('Cache-Control', 'public, max-age=86400000');
      res.set('Content-Encoding', 'gzip');
      next();
    });

    // jquery
    app.get('/public/vendor/jquery/jquery.min.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Cache-Control', 'public, max-age=86400000');
      res.set('Content-Encoding', 'gzip');
      next();
    });

    // font-awesome
    app.get('/public/vendor/font-awesome/css/font-awesome.min.css', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Type', 'text/css');
      res.set('Cache-Control', 'public, max-age=86400000');
      res.set('Content-Encoding', 'gzip');
      next();
    });

    // materialize
    app.get('/public/vendor/materialize/css/materialize.min.css', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Type', 'text/css');
      res.set('Cache-Control', 'public, max-age=86400000');
      res.set('Content-Encoding', 'gzip');
      next();
    });
    app.get('/public/vendor/materialize/js/materialize.min.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Cache-Control', 'public, max-age=86400000');
      res.set('Content-Encoding', 'gzip');
      next();
    });

    app.get('/public/images/*', function (req, res, next) {
      res.set('Cache-Control', 'public, max-age=86400000');
      next();
    });

    app.use('/public', publicPath);

    app.get('*', function (req, res) {
      if (req.url.indexOf('service-worker') !== -1){
          res.set('Content-Type', 'text/javascript');
          res.sendFile(swPath);
      } else {
        res.sendFile(indexPath);
      }
    });

    return app;
  }
}
