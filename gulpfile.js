var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
	bootstrapDir: './bower_components/bootstrap-sass',
	publicDir: './public'
};

gulp.task('sass', function(){
	return gulp.src('public/scss/*')
	.pipe(sass({includePaths: [config.bootstrapDir + '/assets/stylesheets']}))
	.pipe(gulp.dest(config.publicDir + '/stylesheets'))
});

gulp.task('watch-sass', function() {
  
  gulp.watch([config.publicDir + '/scss/**/*.scss', config.bootstrapDir + '/assets/stylesheets/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch-sass']);