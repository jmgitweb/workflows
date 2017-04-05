var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

var coffeeSources = ['components/coffee/tagline.coffee'];


gulp.task('coffee', function(){
  // specifiy which file to process
  gulp.src(coffeeSources)
    .pipe(coffee({bare: true}) //bare : true is a coffee-script language stuff
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts')) //defines where to put file when done
});
