var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
	bootstrapDir: './bower_components/bootstrap-sass',
	publicDir: './public'
};

gulp.task('css', function(){
	return gulp.src('./css/app.scss')
	.pipe(sass({
		includePaths: [config.bootstrapDir + '/assets/stylesheets'],
	}))
	.pipe(gulp.dest(config.publicDir + '/scss'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('sass', function(){
	return gulp.src('public/scss/app.scss')
	.pipe(sass())
	.pipe(gulp.dest('public/stylesheets'))
});

gulp.task('default', ['css', 'sass']);