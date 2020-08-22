var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var input = './assets/sass/**/*.scss';
var output = './assets/css';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
};

gulp.task('sass', function () {
    return gulp
        .src(input)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output));
});
