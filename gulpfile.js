// including plugins
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const clean = require('gulp-clean');
const folder = './';

// npm init
// npm install gulp browser-sync gulp-minify-html gulp-minify-css gulp-uglify run-sequence gulp-clean gulp-inject-partials gulp-sitemap gulp-imagemin --save

// https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/

gulp.task('default', ['maintask'], function (callback) {
	//runs maintask first, then:
	return callback;
});

gulp.task('maintask', function(callback) {
	// it runs 'clean' then 'copyall' then the other ones in parallel then callback
	return runSequence(
		'clean',
		'copyall',
		['minify-html', 'minify-css', 'minify-js'],
		callback);
});


gulp.task('clean', function () {
    return gulp.src('./dist/', {read: false})
        .pipe(clean());
});

gulp.task('copyall', function () {
	return gulp.src([folder + '**/*', '!**/node_modules/**', '!**/node_modules', '!**dist/**', '!**dist'])
		.pipe(gulp.dest('./dist/'));
});

gulp.task('minify-html', () => {
	return gulp.src([folder + '**/*.html', '!**/node_modules/**', '!**/node_modules', '!**dist/**', '!**dist'])
	.pipe(htmlmin({
		collapseWhitespace: true,
		removeComments: true,
		removeAttributeQuotes: true,
		minifyJS: true
	}))
	.pipe(gulp.dest('./dist/'));
});

gulp.task('minify-css', function () {
	return gulp.src([folder + '**/*.css', '!**/node_modules/**', '!**/node_modules', '!**dist/**', '!**dist'])
		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('minify-js', function () {
	return gulp.src([folder + '**/*.js', '!**/node_modules/**', '!**/node_modules', '!**dist/**', '!**dist'])
		.pipe(terser({
			ecma: 6,
			mangle: {
				toplevel: true,
			}
		}))
		.pipe(gulp.dest('./dist/'));
});
