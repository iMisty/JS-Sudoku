const gulp = require('gulp')

// 转译JavaScript
gulp.task('webpack', () => {
  const webpack = require('webpack-stream');
  const config = require("./webpack.config.js");
  gulp.src('./js/**/*.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('../www/js'));
})

// 编译Less -> css
gulp.task('less', () => {
  const webpack = require('gulp-less')
  gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('../www/css'));
})

gulp.task('default', ['webpack', 'less'])
