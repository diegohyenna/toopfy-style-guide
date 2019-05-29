const gulp = require('gulp')
const sass = require("gulp-sass")
var rename = require('gulp-rename')

sass.compiler = require('node-sass')

gulp.task('online', online)

gulp.task('default', compilaInSass)

function compilaInSass(){
  return gulp
    .src("src/toopfy-style-guide/**/*.scss")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('toopfy.guide.min.css'))
    .pipe(gulp.dest("dist/css"))
}

function online(){
  gulp.watch("src/toopfy-style-guide/**/*.scss", compilaInSass)
}