/**
 * builds boards
 * @author sarkiroka on 2017.12.28.
 */
var datConstants=require('../source/game/board/constants');
var endOfBuild = require('./end-of-build')('DAT');
var File = require('vinyl');
var gulp = require('gulp');
var path = require('path');
var plumber = require('gulp-plumber');
var Transform = require('readable-stream/transform');

const TARGET_FOLDER = path.normalize(path.join(__dirname, '..', 'dist'));

gulp.task('dat', function buildDAT() {
	return gulp.src('../source/boards/*.dat')
		.pipe(plumber(function (err) {
			console.error('dat2json error', err);
			this.emit('end');
		}))
		.pipe(dat2json(datConstants))
		.pipe(gulp.dest(TARGET_FOLDER));
});

gulp.task('watchdat', ['dat'], function () {
	gulp.watch('../source/boards/*.dat', function () {
		gulp.start('dat', endOfBuild);
	});
});

gulp.task('watch', ['watchdat'], endOfBuild);

gulp.task('default', ['dat'], endOfBuild);

function dat2json(options) {
	return new Transform({
		objectMode: true,
		transform: function (file, enc, callback) {
			if (file.isNull()) {
				return callback(null, file);
			}

			var result = {};
			var contentString = '';
			if (file.isStream()) {
				contentString = file.contents;
			}

			if (file.isBuffer()) {
				contentString = file.contents + '';
			}

			var board = [];
			var rows = contentString.replace(/\r\n/g, '\n').split(/\n/);
			for (var rowCount = 0; rowCount < rows.length; rowCount++) {
				var cols = rows[rowCount].split('');
				for (var colCount = 0; colCount < cols.length; colCount++) {
					var char = cols[colCount];
					if (typeof options[char] != 'undefined') {
						var boardItem = {
							x: colCount,
							y: rowCount,
							type: options[char]
						};
						board.push(boardItem);
					}
				}
			}
			var retValue = {
				board: board
			};

			var filename = path.parse(path.basename(file.path)).name;
			var transformedFile = new File({
				path: filename + '.json',
				contents: new Buffer(JSON.stringify(retValue))
			});
			this.push(transformedFile);

			callback();
		}
	});
}
