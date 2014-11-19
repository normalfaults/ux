var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var bower = require('gulp-bower');
var server = require( 'gulp-develop-server');

// JS Hint
var jshint = require('gulp-jshint');
var filter = require('gulp-filter');

// JavaScript
var browserify = require('browserify');
var transform = require('vinyl-transform');
var unpathify = require('gulp-unpathify');
var uglify = require('gulp-uglify');

// Templates
var templates = require('gulp-angular-templatecache');

// CSS
var sass = require('gulp-ruby-sass');
var autoprefix = require('gulp-autoprefixer');

// Images
var imagemin = require('gulp-imagemin');

// Utils
var clean = require('gulp-clean');
var notify = require('gulp-notify');

var errorHandler = function(err) {
  util.log(util.colors.red('Error'), err.message);
  this.emit('end');
};

var appAssetSrc = 'assets',
  appAssetDest = 'public',
  bowerPath = './bower_components',
  theme = 'pepper-grinder',
  paths = {
    src: {
      scripts: ['./' + appAssetSrc + '/js/main.js'],
      templates: [appAssetSrc + '/templates/**/*.html'],
      styles: [
        appAssetSrc + '/sass/styles.sass'
      ],
      images: [
        appAssetSrc + '/images/**/*'
      ],
      fonts: [appAssetSrc + '/fonts/**/*'],
      theme: bowerPath + '/jquery-ui/themes/' + theme + '/'
    },
    bower: bowerPath,
    dest: {
      scripts: appAssetDest + '/js',
      templates: appAssetDest + '/js',
      styles: appAssetDest + '/css',
      images: appAssetDest + '/images',
      fonts: appAssetDest + '/fonts'
    }
  };

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(paths.bower));
});

gulp.task('jshint', ['bower'], function() {
  var jsFilter = filter(['*', '!' + appAssetSrc + '/js/vendor']);

  return gulp.src(appAssetSrc + '/js/**/*.js')
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
    .pipe(templates({
      module: 'broker',
      root: '/'
    }))
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
    .pipe(imagemin({optimizationLevel: 7, progressive: true, interlaced: true}))
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

// run server
gulp.task( 'server:start', function() {
  server.listen( { path: './app.js' } );
});

// restart server if app.js changed
gulp.task( 'server:restart', function() {
  gulp.watch( [ './app.js' ], server.restart );
});

gulp.task('watch', function() {
  // watches JavaScript files for changes
  gulp.watch(appAssetSrc + '/js/**/*.js', ['jshint', 'scripts']);

  // Watch and recompile templates
  gulp.watch(appAssetSrc + '/templates/**/*.html', ['templates']);

  // watches Sass files for changes
  gulp.watch(appAssetSrc + '/sass/**/*.s?ss', ['styles']);

  // watches Image files for changes
  gulp.watch(appAssetSrc + '/images/**/*', ['images']);
});

gulp.task('default', ['bower', 'scripts', 'templates', 'styles', 'images', 'icons', 'fonts', 'theme', 'watch']);

gulp.task('production', ['bower', 'scripts', 'templates', 'styles', 'images', 'icons', 'fonts', 'theme']);