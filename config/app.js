const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd
  },
  webpack: {
    mode: isProd ? "production" : "development"
  },
  imagemin: {
    verbose: true // показывает размеры до/после
  },
  fonter: {
    formats: ["ttf", "woff", "eot", "svg"]
  }
}