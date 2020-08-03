const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

const src = {
    style: './scss/style.scss',
    build: './'
}

const scss = () => {
    return gulp.src(src.style)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(src.build))
    .pipe(browserSync.stream());
};

const serve = () => {
    browserSync.init({
        server: {
            baseDir:src.build  
        }
    });

    gulp.watch('./scss/**/*.scss', gulp.series(scss))
    gulp.watch('./*.html').on('change', browserSync.reload);
}
gulp.task('serve', gulp.series(scss, serve));

