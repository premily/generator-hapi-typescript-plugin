var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var notifier = require('node-notifier');
var sourcemaps = require('gulp-sourcemaps');

var tsProjectEmily = ts.createProject({
    declarationFiles: true,
    noExternalResolve: false,
    module: 'commonjs',
    target: 'ES5',
    noEmitOnError: false
});

gulp.task('ts', function() {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProjectEmily));

    tsResult._events.error[0] = function(error) {
        notifier.notify({
            'title': 'Compilation error',
            'message': error.__safety.toString(),
            sound: true
        });
    };
    return merge([
        tsResult.dts.pipe(gulp.dest('lib/definitions')),
        tsResult.js.pipe(gulp.dest('lib/js'))
    ]);
});

gulp.task('default', ['ts'], function() {

});