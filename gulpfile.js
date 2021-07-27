var gulp = require('gulp')

// processHtml
var uglifyCss = require('gulp-uglifycss');


// processHandlebars


// processCss
gulp.task('processCss', () =>
{
    return gulp
    .src('./src/**/*.css')
    .pipe(uglifyCss())
    .pipe(gulp.dest('./dist'))
})

// processSass

// processJs
var minifyJs = require('gulp-terser')
gulp.task('processJs', () =>
{
    return gulp
    .src('./src/**/*.js')
    .pipe(minifyJs())
    .pipe(gulp.dest('dist'))
})

// processTs
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var ts = require('gulp-typescript');
gulp.task('processTs', () =>
{
    return gulp.src('./src/**/*.ts')
    .pipe(ts({
        "target": "es6",
        "esModuleInterop": true,
        "moduleResolution": 'node'
    }))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    /*
    .pipe(browserify({
      insertGlobals : true,
    }))
    */
    .pipe(minifyJs())
    .pipe(gulp.dest('dist'))
})

// copyImgs

gulp.task('copyImgs', () =>
{
    return gulp.src('./src/**/*.{gif,jpg,png,svg,ico}')
    .pipe(gulp.dest('dist'))
})

// Called by 'default', watches for changes and recompiles changed files
gulp.task('watch', () =>
{
    // html

    // hbs

    // js
    gulp.watch('./src/**/*.js', gulp.series('processJs'))

    // ts
    gulp.watch('./src/**/*.ts', gulp.series('processTs'))

    // css
    gulp.watch('./src/**/*.css', gulp.series('processCss'))

    // scss

    // imgs
    gulp.watch('./src/**/*.{gif,jpg,png,svg,ico}', gulp.series('copyImgs'))
})

// Called by 'default', runs once compiling everything at the start
gulp.task('run', gulp.series([
    // html

    // hbs

    // js
    'processJs',
<<<<<<< HEAD

    // ts

    // css
    'processCss', 

    // scss

    // imgs
=======
    'processTs',
>>>>>>> 2fa918e (Gulp can compile ts, converted js files to ts)
    'copyImgs'
]))

// Called when you run gulp in the terminal
gulp.task('default', gulp.parallel(['run', 'watch']))