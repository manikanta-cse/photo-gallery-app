// Gulp Dependencies
var gulp = require('gulp');
var rename = require('./public/lib/node_modules/gulp-rename');

// Build Dependencies
var browserify = require('./public/lib/node_modules/gulp-browserify');
var uglify = require('./public/lib/node_modules/gulp-uglify');
var concat = require('./public/lib/node_modules/gulp-concat');

// Style Dependencies
var prefix = require('./public/lib/node_modules/gulp-autoprefixer');
var minifyCSS = require('./public/lib/node_modules/gulp-clean-css');


// Development Dependencies
var jshint = require('./public/lib/node_modules/gulp-jshint');
var open = require('./public/lib/node_modules/gulp-open');

gulp.task('lint-client', function () {
    return gulp.src('./public/app/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('browserify-client', ['lint-client'], function () {
    return gulp.src('./public/app/app.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(rename('photo-gallery.js'))
        .pipe(gulp.dest('./public/app/dist'));

});

gulp.task('watch', function () {
    gulp.watch('./public/app/app/*.js', ['browserify-client']);
});

gulp.task('pack-css', function () {
    return gulp.src(['./public/lib/album.css', './public/lib/node_modules/bootstrap/dist/css/bootstrap.min.css', './public/lib/node_modules/toastr/build/toastr.min.css'])
        .pipe(concat('photo-gallery.css'))
        .pipe(gulp.dest('./public/app/dist'))
});

gulp.task('minify-css', ['pack-css'], function () {
    return gulp.src('./public/app/dist/photo-gallery.css')
        .pipe(minifyCSS())
        .pipe(rename('photo-gallery.min.css'))
        .pipe(gulp.dest('./public/app/dist'));
});

gulp.task('uglify', ['browserify-client'], function () {
    return gulp.src('./public/app/dist/photo-gallery.js')
        .pipe(uglify())
        .pipe(rename('photo-gallery.min.js'))
        .pipe(gulp.dest('./public/app/dist'));
});

gulp.task('open', function () {
    gulp.src(__filename)
        .pipe(open({ uri: `http://localhost:${process.env.PORT || 8090}` }));
});


gulp.task('build', ['uglify', 'minify-css'], webStart);
gulp.task('default', ['build', 'watch'], webStart);


function webStart() {
    gulp.start('open');
}

