var gulp = require('gulp')

// processHtml
var uglifyCss = require('gulp-uglifycss');


// processHandlebars


// processCss


// processSass
var sass = require('gulp-sass')(require('sass'));
gulp.task('processSass', () =>
{
    return gulp.src(['./src/**/*.scss', '!./src/**/_*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifyCss())
    .pipe(gulp.dest('./dist'))
})

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

    // css

    // scss
    gulp.watch('./src/**/*.scss', gulp.series('processSass'))

    // imgs
    gulp.watch('./src/**/*.{gif,jpg,png,svg,ico}', gulp.series('copyImgs'))
})

// Called by 'default', runs once compiling everything at the start
gulp.task('run', gulp.series([
    // html

    // hbs

    // js
    'processJs',

    // ts

    // css

    // scss
    'processSass', 
    
    // imgs
    'copyImgs'
]))

// Called when you run gulp in the terminal
gulp.task('default', gulp.parallel(['run', 'watch']))