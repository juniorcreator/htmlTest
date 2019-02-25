'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');
var  livereload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});