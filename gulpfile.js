var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
  'components/scripts/rclick.js',
  'components/scripts/pixgrid.js',
  'components/scripts/tagline.js',
  'components/scripts/template.js'
];


gulp.task('coffee', function(){
  // specifiy which file to process
  gulp.src(coffeeSources)
    .pipe(coffee({bare: true}) //bare : true is a coffee-script language stuff
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts')) //defines where to put file when done
});

//Put all js files into one
gulp.task('js', function(){
  gulp.src(jsSources)
    .pipe(concat('script.js')) //script.js is the name we want to give to final file
    .pipe(gulp.dest('builds/development/js'))
});
