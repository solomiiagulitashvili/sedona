const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const gulp = require('gulp');
const smaps = require('gulp-sourcemaps');
const bsync = require('browser-sync').create();

sass.compiler = require('node-sass');

function css() {
  return gulp
    .src('./scss/index.scss')
    .pipe(smaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(smaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(bsync.stream());
}

function defaultTask(cb) {
  bsync.init({ server: { baseDir: './' }, port: 3000, host: '192.168.0.113' });
  gulp.watch('./scss/**/*.scss', css);
  gulp.watch('./scripts/**/*.js').on('change', bsync.reload);
  gulp.watch('./index.html').on('change', bsync.reload);
  cb();
}

exports.css = css;
exports.default = defaultTask;
