'use strict';

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulp   = require('gulp');

gulp.task('lint', function() {
  return gulp.src('./src/*.js')
        	 .pipe(jshint())
             .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
  return gulp.src('./src/*.js')
             .pipe(concat('trans-nav.directive.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['lint'], function() {
	// Processes script files on update
	gulp.watch('./src/*.js', function() {
		gulp.run('lint', 'scripts');
	});
});