// Синтаксис Common JS
import gulp from "gulp"

// Config
import path from "../config/path.js"
import app from "../config/app.js"

// Плагины 
import imagemin from "gulp-imagemin"
import imgNewer from "gulp-newer"
import imgWebp from "gulp-webp"
import gulpIf from "gulp-if"

// Обработка IMAGES
export default () => {
  return gulp.src(path.images.src)

  .pipe(imgNewer(path.images.dest))
  .pipe(imgWebp())
  .pipe(gulp.dest(path.images.dest))
  .pipe(gulp.src(path.images.src))
  .pipe(imgNewer(path.images.dest))
  .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
  .pipe(gulp.dest(path.images.dest))
}