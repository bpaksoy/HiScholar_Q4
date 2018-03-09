// including plugins
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var autoprefixer = require('gulp-autoprefixer')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
// var less = require('gulp-less')
var babel = require('gulp-babel')
var path = require('path')

gulp.task('css', function(){
    return gulp.src(
            [
                './public/css/bootstrap.min.css',
                './public/css/material-dashboard.css',
                './public/css/demo.css'
            ]
        )
        .pipe(cleanCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('style.min.css'))
        .pipe(gulp.dest('./public/dist/css/'))
})

gulp.task('copy-fonts', function(){
    return gulp.src(
            ['./public/css/fonts/**']
        )
        .pipe(gulp.dest('./public/dist/css/fonts/'))
})

gulp.task('style', ['css', 'copy-fonts'], function(){})


gulp.task('js', function(){
    return gulp.src(
            [
                './public/js/jquery-3.2.1.min.js',
                './public/js/bootstrap.min.js',
                './public/js/material.min.js',
                './public/js/chartist.min.js',
                './public/js/arrive.min.js',
                './public/js/perfect-scrollbar.jquery.min.js',
                './public/js/bootstrap-notify.js',
                './public/js/material-dashboard.js',
                './public/js/demo.js'
            ]
        )
        .pipe(gp_concat('vendor.min.js'))
        .pipe(gulp.dest('./public/dist/js/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gulp.dest('./public/dist/js/'))
});

gulp.task('es6-es5', ['js'], function(){
    return gulp.src([
                './src/server-index.js',
                './src/*/**.js',
                './src/*/*/**.js'
            ]
        )
        .pipe(babel({
            presets: ['react', 'env']
        }))
        .pipe(gulp.dest('./public/dist/es5/'))
});

gulp.task('watch', function() {
    gulp.watch(['./src/*/**.js', './src/*/*/**.js', './public/js/**.js'], ['es6-es5'])
})

gulp.task('prod', ['style', 'es6-es5'], function(){})

gulp.task('default', ['es6-es5', 'watch'], function(){})
