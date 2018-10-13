// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Style Dependencies
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-clean-css');

// Development Dependencies
var jshint = require('gulp-jshint');

gulp.task('lint-client', function () {
    return gulp.src('../app/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('browserify-client', ['lint-client'], function () {
    return gulp.src('../app/app.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(rename('photo-gallery.js'))
        .pipe(gulp.dest('../app/dist'));

});

gulp.task('watch', function () {
    gulp.watch('../app/*.js', ['browserify-client']);
});


gulp.task('uglify', ['browserify-client'], function () {
    return gulp.src('../app/dist/photo-gallery.js')
        .pipe(uglify())
        .pipe(rename('photo-gallery.min.js'))
        .pipe(gulp.dest('../app/dist'));
});



//Tasks
gulp.task('build', ['uglify']);
gulp.task('default', ['build', 'watch']);

