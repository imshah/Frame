var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();

var files = [
	"gulpfile.js",
	"karma.conf.js",
	"src/**/*.js",
	"src/**/*.html"
];

gulp.task('lint', function(){
	return gulp.src('./public/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('serve', function(){
	
	browserSync.init({
		server: ['node_modules', 'src'],
		files: files
	});

	files.forEach(function(item, index){
		gulp.watch(item).on("change", browserSync.reload);
	});
});


var Server = require('karma').Server;
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/test/karma.conf.js'
  }, done).start();
});

gulp.task('default', ['serve']);