const { series, src, dest, task, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')

sass.compiler = require('node-sass');

task('sass', function () {
  return src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./public/css'));
});

task('sass:watch', function () {
  watch('./styles/**/*.scss', series('sass'));
});