var gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require("gulp-sourcemaps"),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

gulp.task('bootstrap', function () {
    return gulp.src('content/components/bootstrap/less/bootstrap.less')
        .pipe(sourcemaps.init())  // Process the original sources
        .pipe(less({
            plugins: [autoprefix]
        })).on('error', errorAlert)
        .pipe(sourcemaps.write('./')) // Add the map to modified source.
        .pipe(gulp.dest('content/css/'));
});

gulp.task('fontawesome', function () {
    return gulp.src('content/components/font-awesome/less/font-awesome.less')
        .pipe(sourcemaps.init())  // Process the original sources
        .pipe(less({
            plugins: [autoprefix]
        })).on('error', errorAlert)
        .pipe(sourcemaps.write('./')) // Add the map to modified source.
        .pipe(gulp.dest('content/css/'));
});

gulp.task('main', function () {
    return gulp.src('content/less/main.less')
        .pipe(sourcemaps.init())  // Process the original sources
        .pipe(less({
            plugins: [autoprefix]
        })).on('error', errorAlert)
        .pipe(sourcemaps.write('./')) // Add the map to modified source.
        .pipe(gulp.dest('content/css/'));
});

gulp.task("watch-bootstrap", function () {
    gulp.watch("content/components/bootstrap/less/**/*.less", ["bootstrap"]);
});

gulp.task("watch-main", function () {
    return gulp.watch("content/less/**/*.less", ["main"]);
});

gulp.task("default", ["bootstrap", "main", "watch-bootstrap", "watch-main"])

function errorAlert(err) {
    console.log(err.toString());
    this.emit("end");
}
//var gulp = require('gulp');
//var sass = require('gulp-sass');
//var sourcemaps = require("gulp-sourcemaps");
//var autoprefixer = require('gulp-autoprefixer');

//var autoprefixerOptions = {
//    browsers: ['last 2 versions', '> 1%']
//};

//gulp.task('bootstrap', function () {
//    return gulp
//    .src('content/components/bootstrap/scss/bootstrap.scss')
//    .pipe(sourcemaps.init())
//    .pipe(sass().on('error', sass.logError))
//    .pipe(autoprefixer(autoprefixerOptions))
//    .pipe(sourcemaps.write({ sourceRoot: './' }))
//    .pipe(gulp.dest('content/css/'));
//});

//gulp.task('font-awesome', function () {
//    return gulp
//    .src('content/components/font-awesome/scss/font-awesome.scss')
//    .pipe(sourcemaps.init())
//    .pipe(sass().on('error', sass.logError))
//    .pipe(autoprefixer(autoprefixerOptions))
//    .pipe(sourcemaps.write({ sourceRoot: './' }))
//    .pipe(gulp.dest('./content'));    
//});

//gulp.task('main', function () {
//    return gulp
//    .src('content/scss/main.scss')
//    .pipe(sourcemaps.init())
//    .pipe(sass().on('error', sass.logError))
//    .pipe(autoprefixer(autoprefixerOptions))
//    .pipe(sourcemaps.write({ sourceRoot: './' }))
//    .pipe(gulp.dest('content/css/'));
    
//});

//gulp.task("watch-main", function () {
//    return gulp.watch("content/scss/**/*.scss", ["main"]);
//});

//gulp.task("watch-bootstrap", function () {
//    return gulp.watch("content/components/bootstrap/scss/**/*.scss", ["bootstrap"]);
//});

//gulp.task("watch-fontawesome", function () {
//    return gulp.watch("content/components/font-awesome/scss/**/*.scss", ["font-awesome"]);
//});