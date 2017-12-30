/**
 * builds boards
 * @author sarkiroka on 2017.12.28.
 */
var datConstants = require('../source/game/board/constants');
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
			var demo;
			var rows = contentString.replace(/\r\n/g, '\n').split(/\n/);
			var y = 0;
			for (var i = 0; i < rows.length; i++) {
				var row = rows[i];
				if (row.indexOf(';') > -1) {//drop comment
					row = row.substr(0, row.indexOf(';'));
				}
				var emptyRegex = /^\s*$/;
				if (emptyRegex.test(row)) {//a teljesen üres sorok átugrása
					continue;
				}
				var demoRegex = /^!demo:(.+)$/;
				if (demoRegex.test(row)) {
					if (demo) {
						console.error('multiple demo definition found. use latest!', {oldValue: demo, newRaw: row})
					}
					var demoResult = demoRegex.exec(row);
					demo = demoResult[1];
					continue;
				}
				var cols = row.split('');
				for (var colCount = 0; colCount < cols.length; colCount++) {
					var char = cols[colCount];
					if (typeof options[char] != 'undefined') {
						var boardItem = {
							x: colCount,
							y: y,
							type: options[char]
						};
						board.push(boardItem);
					}
				}
				y++;
			}
			var retValue = {
				board: board
			};
			if (demo) {
				retValue.demo = demo;
			}

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
