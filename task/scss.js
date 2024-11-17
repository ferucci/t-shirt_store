import gulp from "gulp"

// Config
import path from "../config/path.js"
import app from '../config/app.js'

// Плагины 
import autoprefixer from "gulp-autoprefixer"
import csso from "gulp-csso"
import rename from "gulp-rename"
import size from "gulp-size"
import shorthand from "gulp-shorthand"
import groupCssMediaQ from "gulp-group-css-media-queries"

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import webpCss from "gulp-webp-css"
import gulpIf from 'gulp-if'

// Обработка SCSS
export default () => {
  return gulp.src(path.scss.src, { sourcemaps: app.isDev })

  .pipe(sass())
  .pipe(webpCss())
  .pipe(autoprefixer())
  .pipe(shorthand())
  .pipe(groupCssMediaQ())
  .pipe(gulpIf(app.isDev, size({ title: "main.css" })))
  .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
  .pipe(rename({ suffix: ".min" }))
  .pipe(csso())
  .pipe(size({ title: "main.min.css" }))
  .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
}
