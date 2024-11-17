// Синтаксис Common JS
import gulp from "gulp"

// Config
import path from "../config/path.js"
import app from "../config/app.js"

// Плагины 
import newer from "gulp-newer" // Не конвертирует уже обработанные данные
import fonter from "gulp-fonter"
import ttf2woff2 from "gulp-ttf2woff2"

// Обработка FONTS
const fonts = () => {
  return gulp.src(path.fonts.src)

  .pipe(newer(path.fonts.dest))
  .pipe(fonter(app.fonter))
  .pipe(gulp.dest(path.fonts.dest))
  .pipe(ttf2woff2())
  .pipe(gulp.dest(path.fonts.dest))
}

export default fonts;