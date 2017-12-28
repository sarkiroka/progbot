/**
 * builds pug
 * @author sarkiroka on 2017.04.30.
 */
var decompress = require('gulp-decompress');
var endOfBuild = require('./end-of-build')('FAVICON');
var gulp = require('gulp');
var path = require('path');
var plumber= require('gulp-plumber');

const TARGET_FOLDER = path.normalize(path.join(__dirname, '..', 'dist'));

gulp.task('favicon', function extractFavicon(){
	return gulp.src('../source/favicon.zip')
		.pipe(plumber(function (err) {
			console.error('favicon error', err);
			this.emit('end');
		}))
		.pipe(decompress({strip: 1}))
		.pipe(gulp.dest(TARGET_FOLDER));
});

gulp.task('watchfavicon', ['favicon'], function () {
	gulp.watch('../source/favicon.zip', function () {
		gulp.start('favicon', endOfBuild);
	});
});

gulp.task('watch', ['watchfavicon'], endOfBuild);

gulp.task('default', ['favicon'], endOfBuild);

