// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Style Dependencies
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// Development Dependencies
var jshint = require('gulp-jshint');

gulp.task('lint-client', function () {
    return gulp.src('./public/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('browserify-client', ['lint-client'], function () {
    return gulp.src('./public/app/app.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(rename('photo-gallery.js'))
        .pipe(gulp.dest('build'))
    //.pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', function () {
    gulp.watch('./public/app/*.js', ['browserify-client']);
});


gulp.task('uglify', ['browserify-client'], function () {
    return gulp.src('build/photo-gallery.js')
        .pipe(uglify())
        .pipe(rename('photo-gallery.min.js'))
        .pipe(gulp.dest('build'));
});


//Tasks
gulp.task('build', ['uglify', 'minify']);
gulp.task('default', ['build', 'watch']);

