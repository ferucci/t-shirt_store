import gulp from "gulp"

// Config
import path from "../config/path.js"
import app from "../config/app.js"

// Плагины
import fileinclude from 'gulp-file-include'
import htmlmin from 'gulp-htmlmin'
import size from 'gulp-size'
import webpHtml from "gulp-webp-html"


// Обработка HTML
const html = () => {
  return gulp.src(path.html.src)
  .pipe(fileinclude())
  .pipe(webpHtml())
  .pipe(size({ title: "До сжатия" }))
  .pipe(htmlmin(app.htmlmin))
  .pipe(size({ title: "После сжатия" }))
  .pipe(gulp.dest(path.html.dest))
}

export default html;