var gulp = require('gulp'),
  util = require('gulp-util'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  bower = require('gulp-bower'),

// JS Hint
  jshint = require('gulp-jshint'),
  filter = require('gulp-filter'),

// JavaScript
  browserify = require('browserify'),
  transform = require('vinyl-transform'),
  unpathify = require('gulp-unpathify'),
  uglify = require('gulp-uglify'),

// Templates
  templates = require('gulp-angular-templatecache'),

// CSS
  sass = require('gulp-ruby-sass'),
  autoprefix = require('gulp-autoprefixer'),

// Images
  imagemin = require('gulp-imagemin'),

// Utils
  clean = require('gulp-clean'),
  notify = require('gulp-notify');

var errorHandler = function(err) {
  util.log(util.colors.red('Error'), err.message);
  this.emit('end');
};

var appAssetSrc = 'src',
  appAssetDest = 'public',
  bowerPath = './bower_components',
  theme = 'pepper-grinder',
  paths = {
    src: {
      scripts: ['./' + appAssetSrc + '/javascripts/main.js'],
      templates: [appAssetSrc + '/templates/**/*.html'],
      styles: [
        appAssetSrc + '/stylesheets/styles.sass'
      ],
      images: [
        appAssetSrc + '/images/**/*'
      ],
      fonts: [appAssetSrc + '/fonts/**/*'],
      theme: bowerPath + '/jquery-ui/themes/' + theme + '/'
    },
    bower: bowerPath,
    dest: {
      scripts: appAssetDest + '/javascripts',
      templates: appAssetDest + '/javascripts',
      styles: appAssetDest + '/stylesheets',
      images: appAssetDest + '/images',
      fonts: appAssetDest + '/fonts'
    }
  };

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(paths.bower));
});

gulp.task('jshint', ['bower'], function() {
  var jsFilter = filter(['*', '!' + appAssetSrc + '/javascripts/vendor']);

  return gulp.src(appAssetSrc + '/javascripts/**/*.js')
    .pipe(plumber({
      errorHandler: errorHandler
    }))
    .pipe(jsFilter)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish-recolor'))
    .pipe(jshint.reporter('fail'))
    .on('error', notify.onError({
      message: 'JS Hinting task failed',
      sound: "Sosumi"
    }))
    .pipe(notify({ message: 'JS Hinting task complete' }))
    .pipe(jsFilter.restore());
});

gulp.task('scripts', ['bower'], function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(paths.src.scripts)
    .pipe(plumber({
      errorHandler: errorHandler
    }))
    .pipe(browserified)
    .pipe(unpathify())
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest(paths.dest.scripts))
    .pipe(notify({message: 'Finished scripts task.'}));
});

gulp.task('templates', ['bower'], function() {
  return gulp.src(paths.src.templates)
    .pipe(templates({module: 'broker'}))
    .pipe(gulp.dest(paths.dest.templates));
});

gulp.task('styles', ['bower'], function() {
  return gulp.src(paths.src.styles)
    .pipe(sass({
      style: 'compressed',
      loadPath: [
          paths.bower + '/bootstrap-sass-official/assets/stylesheets',
          paths.bower + '/fontawesome/scss'
      ]
    }).on("error", notify.onError(function(error) {
      return "Error: " + error.message;
    })))
    .pipe(autoprefix("last 2 version", "> 1%"))
    .pipe(notify({message: 'Finished styles task.'}))
    .pipe(gulp.dest(paths.dest.styles));
});

gulp.task('images', ['bower'], function() {
  return gulp.src(paths.src.images)
    .pipe(plumber({
      errorHandler: errorHandler
    }))
    .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
    .pipe(gulp.dest(paths.dest.images))
    .pipe(notify({message: 'Finished images task.'}));
});

gulp.task('fonts', function() {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.dest.fonts));
});

gulp.task('icons', ['bower'], function() {
  return gulp.src(paths.bower + '/fontawesome/fonts/**.*')
    .pipe(gulp.dest(paths.dest.fonts));
});

gulp.task('theme', ['bower'], function() {
  return gulp.src([paths.src.theme+'jquery-ui.min.css', paths.src.theme+'images/**/*'], {base: paths.src.theme})
    .pipe(gulp.dest(paths.dest.styles));
});

gulp.task('watch', function() {
  // watches JavaScript files for changes
  gulp.watch(appAssetSrc + '/javascripts/**/*.js', ['jshint', 'scripts']);

  // Watch and recompile templates
  gulp.watch(appAssetSrc + '/templates/**/*.html', ['templates']);

  // watches Sass files for changes
  gulp.watch(appAssetSrc + '/stylesheets/**/*.s?ss', ['styles']);

  // watches Image files for changes
  gulp.watch(appAssetSrc + '/images/**/*', ['images']);
});

gulp.task('default', ['bower', 'scripts', 'templates', 'styles', 'images', 'icons', 'fonts', 'theme', 'watch']);

gulp.task('production', ['bower', 'scripts', 'templates', 'styles', 'images', 'icons', 'fonts', 'theme']);