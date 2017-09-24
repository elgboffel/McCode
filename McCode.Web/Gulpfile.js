/// <binding ProjectOpened='watch-less' />

var gulp = require('gulp'),
    less = require('gulp-less'),
    //path = require('path'), //Used to create folders e.g. compiling each .less as .css
    sourcemaps = require("gulp-sourcemaps"),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] }),
    watch = require('gulp-watch');

gulp.task('fontawesome', function () {
    return gulp.src('content/components/font-awesome/less/font-awesome.less')
        .pipe(less({
            plugins: [autoprefix]
        })).on('error', errorAlert)
        .pipe(gulp.dest('content/css/'));
});

gulp.task('less', function () {
    return gulp.src(['Content/less/main.less', 'Content/less/shell.less'])
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [autoprefix],
            //paths: [path.join(__dirname, 'less', 'includes')]
        })).on('error', errorAlert)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('content/css'))
});

gulp.task("watch-less", function () {
    gulp.watch("content/less/**/*.less", ["less"]);
});

function errorAlert(err) {
    console.log(err.toString());
    this.emit("end");
}
