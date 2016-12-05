var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require('gulp-autoprefixer');

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 1%']
};

gulp.task('bootstrap', function () {
    return gulp
    .src('content/components/bootstrap/scss/bootstrap.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write({ sourceRoot: './' }))
    .pipe(gulp.dest('content/css/'));
});

gulp.task('font-awesome', function () {
    return gulp
    .src('content/components/font-awesome/scss/font-awesome.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write({ sourceRoot: './' }))
    .pipe(gulp.dest('./content'));    
});

gulp.task('main', function () {
    return gulp
    .src('content/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write({ sourceRoot: './' }))
    .pipe(gulp.dest('content/css/'));
    
});

gulp.task("watch-main", function () {
    return gulp.watch("content/scss/**/*.scss", ["main"]);
});

gulp.task("watch-bootstrap", function () {
    return gulp.watch("content/components/bootstrap/scss/**/*.scss", ["bootstrap"]);
});

gulp.task("watch-fontawesome", function () {
    return gulp.watch("content/components/font-awesome/scss/**/*.scss", ["font-awesome"]);
});