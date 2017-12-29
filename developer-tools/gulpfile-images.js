/**
 * builds images
 * @author sarkiroka on 2017.04.30.
 */
var decompress = require('gulp-decompress');
var endOfBuild = require('./end-of-build')('IMAGES');
var gulp = require('gulp');
var path = require('path');
var plumber= require('gulp-plumber');

const TARGET_FOLDER = path.normalize(path.join(__dirname, '..', 'dist'));

gulp.task('images', function extractFavicon(){
	return gulp.src('../source/images.zip')
		.pipe(plumber(function (err) {
			console.error('images error', err);
			this.emit('end');
		}))
		.pipe(decompress({strip: 1}))
		.pipe(gulp.dest(TARGET_FOLDER));
});

gulp.task('watchimages', ['images'], function () {
	gulp.watch('../source/images.zip', function () {
		gulp.start('images', endOfBuild);
	});
});

gulp.task('watch', ['watchimages'], endOfBuild);

gulp.task('default', ['images'], endOfBuild);

