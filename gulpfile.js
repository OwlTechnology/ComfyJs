const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');


gulp.task('convertjs', function(){
  return gulp.src('./src/**/*.js')
          .pipe(concat('comfy.js'))
          .pipe(gulp.dest('./dist'))
          .pipe(uglify())
          .pipe(rename('comfy.min.js'))
          .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['convertjs']);

gulp.task('default', function(){
  gulp.watch('./src/**/*.js', ['convertjs']);
});
