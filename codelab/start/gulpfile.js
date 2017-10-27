const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('server', function() {
  return connect.server({
    port: 8080,
    livereload: true
  });
});

gulp.task('reload', function () {
  return gulp.src('./index.html').pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./index.html', 'css/*.css', 'js/*.js'], ['reload']);
});

gulp.task('default', ['server', 'watch']);
