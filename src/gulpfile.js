const gulp = require('gulp')

// 转译JavaScript
gulp.task('webpack', () => {
  const webpack = require('webpack-stream');
  const config = require("./webpack.config.js");
  gulp.src('./js/**/*.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('../www/js'));
})
/* 
// 编译Less -> css
gulp.task('less', () => {
  const webpack = require('gulp-less')
  const config = require("./webpack.config.js");
  gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('../www/css'));
})
 */

/* 自动编译 */
gulp.task('default', ['webpack']);
gulp.task('watch', () => {
  // gulp.watch('less/**/*.less',['less']);
  gulp.watch('js/**/*.js', ['webpack']);
});
