var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
del = require('del'),
runSequence = require('run-sequence'),
config = require('../config');

// moves dist to gh-pages

gulp.task('fontgen1', function(callback){
  del([config.main.src + 'assets/fonts', config.main.dest + 'assets/fonts'], callback);
});

gulp.task('fontgen2', function() {
  return gulp.src(config.main.src + 'fontgen/*.{ttf,otf}')
  .pipe($.fontgen({
    dest: config.main.src + 'assets/fonts/'
  }));
});

gulp.task('fontgen', function(callback) {
  runSequence(
    ['fontgen1'],
    ['fontgen2'],
    ['font'],
    callback
    );
});
