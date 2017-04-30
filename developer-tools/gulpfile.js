/**
 * builds pug
 * @author sarkiroka on 2017.04.30.
 */
var endOfBuild = require('./end-of-build')('PUG');
var gulp = require('gulp');
var path = require('path');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');

const TARGET_FOLDER = path.normalize(path.join(__dirname, '..', 'dist'));

gulp.task('pug', function buildHTML() {
	return gulp.src('../source/*.pug')
		.pipe(plumber(function (err) {
			console.error('pug err', err);
			this.emit('end');
		}))
		.pipe(pug())
		.pipe(gulp.dest(TARGET_FOLDER));
});

gulp.task('watchpug', ['pug'], function () {
	gulp.watch('../source/*.pug', function () {
		gulp.start('pug', endOfBuild);
	});
});
gulp.task('watch', ['watchpug'], endOfBuild);

gulp.task('default', ['pug'], endOfBuild);

