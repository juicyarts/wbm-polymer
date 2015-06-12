(function() {
	"use strict";
	var gulp = require("gulp"),
		gutil = require("gulp-util"),
		jshint = require("gulp-jshint"),
		browSync = require('browser-sync'),
		logadditionstart = gutil.colors.cyan(" -- Comon Gulp: -- "),
		logadditionend = gutil.colors.cyan(" -- ");


	// Makes Site accessable over RBwosersync wich will reload you
	// page in "watch" task
	// tested - running
	gulp.task('browserSync', function() {
		browSync({
			port: '1337',
			server: './public',
			ghostMode: {
				clicks: true,
				forms: true,
				scroll: true
			},
			logLevel: "debug",
			logPrefix: "Browsersync says:",
			locConnections: true,
			logFileChanges: true,
			online: true,
			open: "external",
			notify: false,
			scrollProportionally: true,
			timestamp: false,
			injectChanges: true
		});
	});

	// lint your code
	// tested - running
	gulp.task("lint", function() {
		return gulp.src([
				"./public/elements/**/*.js",
				"./public/elements/**/**/*.js",
				"./test/**/*.js"
			])
			.pipe(jshint({
				lookup: true
			})).pipe(jshint.reporter(
				"jshint-stylish",
				function() {
					gutil.log(gutil.colors.magenta(" -- -- "), gutil.colors.cyan("Jshint was clean"), gutil.colors.magenta(" -- -- "));
				}));
	});


	gulp.task("watch", ['browserSync'], function() {
		gutil.log(gutil.colors.magenta(" -- -- "), gutil.colors.cyan("intiliaizing watchers"), gutil.colors.magenta(" -- -- "));
		return gulp.watch([
			"./public/**",
			"./public/**/**",
			"./public/**/**/**",
			"./public/**/**/**/**",
		], ['lint']).on("change", function(event) {
			browSync.reload();
		}).on("create", function(event) {
			browSync.reload();
		});
	});
})();
