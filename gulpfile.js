
'use strict'

var gulp = require ('gulp');
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var newer = require('gulp-newer');
var browserSync = require('browser-sync');


gulp.task('sass', function(){
    return gulp.src("src/style/1920.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist/style"))
});

gulp.task('templates', function () {
  return gulp.src('src/assets/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function() {
  return del('build')
});

gulp.task('assets', function() {
  return gulp.src('src/assets/**', {since: gulp.lastRun('assets')})
      .pipe(newer('dist'))
      .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('sass','templates', 'assets'))
);

gulp.task('watch', function() {
  gulp.watch('src', gulp.series('sass'));
  gulp.watch('src/assets/', gulp.series('assets'))
  gulp.watch('src/', gulp.series('templates'))
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'dist'
  });

  browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});


gulp.task('dev', gulp.series('build',gulp.parallel('watch', 'serve')));
gulp.task('default', gulp.series('dev'));
