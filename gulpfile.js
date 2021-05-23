const { series, parallel, src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { webpackConfig, scripts } = require('./webpack.config');
const bundler = webpack(webpackConfig);

function server(done) {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    middleware: [
      webpackDevMiddleware(bundler, { /* options */ }),
      webpackHotMiddleware(bundler)
    ]
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

function html() {
  return src('./src/index.html')
    .pipe(dest('./dist'));
}

function watchFiles() {
  watch('./src/index.html', series(html, reload));
  watch(['./src/modules/**/*.js', './src/index.js'], series(scripts, reload));
}

const dev = parallel(html, scripts);

module.exports = {
  develop: series(dev, server, watchFiles),
  build: dev,
  default: dev
}


