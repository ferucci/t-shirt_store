// Здесь прописаны все пути до файлов сборки
const pathSrc = "./src";
const pathDest = "./public";

export default {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest
  },

  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css"
  },

  scss: {
    src: pathSrc + "/scss/*.{scss, sass}",
    watch: pathSrc + "/scss/**/*.{scss, sass}",
    dest: pathDest + "/css"
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js"
  },

  images: {
    src: pathSrc + "/images/**/*.{png,jpg,jpeg,gif,svg}",
    watch: pathSrc + "/images/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/images"
  },

  fonts: {
    src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/fonts"
  },
}