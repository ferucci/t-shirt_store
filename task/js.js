import gulp from "gulp"

// Config
import path from "../config/path.js"
import app from "../config/app.js"

// Плагины 
import babel from "gulp-babel"
import webpack from "webpack-stream"

// Обработка JS
export default () => {
  return gulp.src(path.js.src, { sourcemaps: app.isDev })

  .pipe(babel())
  .pipe(webpack(app.webpack))
  .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }))
}