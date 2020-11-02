var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var del = require('del');

/**
 * - - - - - - - - - - - - - - - - - - - - - -
 * Variables
 * - - - - - - - - - - - - - - - - - - - - - -
 */
var paths = {
    styles: {
        style: 'assets/sass/style.scss',
        sass: 'assets/sass/**/*.scss',
        js: 'assets/js/**/*.js',
        dist: 'assets/css/',
    },
};

// SASS Options (log errors)
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
};

/**
 * - - - - - - - - - - - - - - - - - - - - - -
 * Tasks
 * - - - - - - - - - - - - - - - - - - - - - -
 */

const clean = () => del([paths.styles.dist]);

/**
 * Compile all SASS files into one unique CSS
 */
function style() {
    return (
        gulp
            .src(paths.styles.style)
            .pipe(sourcemaps.init())
            .pipe(sass(sassOptions).on('error', sass.logError))
            .pipe(sass())
            .pipe(sourcemaps.write())
            .pipe(autoprefixer())
            .pipe(gulp.dest(paths.styles.dist))
            /* .pipe(
            rename({
                suffix: '.min',
            })
        )
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dist)) */
            .pipe(browserSync.stream())
    );
}

/**
 * Reload browser (F5)
 */
function reload() {
    browserSync.reload();
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
            index: '/index.html',
        },
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });
    // We should tell gulp which files to watch to trigger the reload
    // This can be html or whatever you're using to develop your website
    gulp.watch('index.html').on('change', reload);
    gulp.watch(paths.styles.js).on('change', reload);
    gulp.watch(paths.styles.sass).on('change', gulp.series(clean, style, reload));
    gulp.watch(paths.styles.sass).on('change', gulp.series(clean, style, reload));
}

/**
 * - - - - - - - - - - - - - - - - - - - - - -
 * Export
 * - - - - - - - - - - - - - - - - - - - - - -
 */

// Expose the tasks by exporting them
// This allows you to run it from the commandline using
// $ gulp style
exports.clean = clean;
exports.style = style;
exports.watch = watch;

// Expose tasks like below for using gulp.series or gulp.parallels
gulp.task('default', gulp.series(clean, style, watch));
