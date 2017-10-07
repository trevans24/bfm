const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-CSS');

// Default task
gulp.task('default', () => {
  gulp.watch('src/sass/**/*.scss', ['styles']);
});

// Minify CSS
gulp.task('styles', () => {
  gulp.src('src/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS().on('error', sass.logError))
  .pipe(gulp.dest('./src/css/'));
});
