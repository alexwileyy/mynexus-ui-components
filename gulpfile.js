const { series, src, dest, task, watch } = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

task('sass', function () {
  return src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./public/css'));
});

task('sass:watch', function () {
  watch('./styles/**/*.scss', series('sass'));
});