var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();

var files = [
	"gulpfile.js",
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

gulp.task('default', ['serve']);