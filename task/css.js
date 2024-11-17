// Синтаксис Common JS
import gulp from "gulp"

// Config
import path from "../config/path.js"
import app from '../config/app.js'

// Плагины 
import concat from "gulp-concat"
import cssimport from "gulp-cssimport"
import autoprefixer from "gulp-autoprefixer"
import csso from "gulp-csso"
import rename from "gulp-rename"
import size from "gulp-size"
import shorthand from "gulp-shorthand"
import groupCssMediaQ from "gulp-group-css-media-queries"
// const webpCss = require("gulp-webp-css");

// Обработка CSS 
const css = () => {
  return gulp.src(path.css.src, { sourcemaps: app.isDev })

  .pipe(concat("main.css"))
  .pipe(cssimport())
  // .pipe(webpCss())
  .pipe(autoprefixer())
  .pipe(shorthand())
  .pipe(groupCssMediaQ())
  .pipe(size({ title: "main.css" }))
  .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
  .pipe(rename({ suffix: ".min" }))
  .pipe(csso())
  .pipe(size({ title: "main.min.css" }))
  .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
}

export default css;