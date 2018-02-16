var gulp = require('gulp'),
watch = require('gulp-watch'),
connect = require('gulp-connect-php'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });

  watch(['./docs/index.html','./docs/registration.html', './docs/history.html','./docs/css/style.css'], function(){
    browserSync.reload();
  });

});
