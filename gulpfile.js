var gulp = require('gulp'),
shell = require('gulp-shell'),
jshint = require('gulp-jshint'),
stylish = require('jshint-stylish'),
runSequence = require('run-sequence'),
gulpJsdoc2md = require("jsdoc-to-markdown"),
git = require('gulp-git');

var options = require('minimist')(process.argv.slice(2));

gulp.task('default', function() {
	runSequence('extract', 'jsdoc', 'markdown-server', 'markdown-client', 
        'markdown-all', 'jshint-client', 'jshint-server', 'add-files', 
        'commit-files', 'push-files');
});

gulp.task('extract', shell.task( [
    ("node index.js --instance '" + options.instance + "' --username '" + 
        options.username + "' --password '" + options.password + 
        "' --update_set '" + options.update_set + "'")
    ])
);

gulp.task('jsdoc', shell.task([
    'jsdoc -c conf.json'
    ])
);

gulp.task('markdown-server', shell.task([
    'jsdoc2md ./sys_script_include/*.js > server.md'
    ]));
gulp.task('markdown-client', shell.task([
    'jsdoc2md ./sys_ui_script/*.js > client.md'
    ]));
gulp.task('markdown-all', shell.task([
    'jsdoc2md ./sys_script_include/*.js ./sys_ui_script/*.js > all.md'
    ]));

gulp.task('jshint-server', function() {
  return gulp.src('./sys_script_include/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter(stylish))
             .pipe(jshint.reporter('gulp-jshint-file-reporter', {
                filename: __dirname + '/jshint-server-output.log'
             }));
});

gulp.task('jshint-client', function() {
  return gulp.src('./sys_ui_script/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter(stylish))
             .pipe(jshint.reporter('gulp-jshint-file-reporter', {
                filename: __dirname + '/jshint-client-output.log'
             }));
});

var sourceArray = ['./all.md', './client.md', './server.md', 
'./sys_script_include/*.js', './sys_ui_script/*.js', 
'./u_scheduled_unit_test/*.js', './sys_remote_update_set/*.xml', 
'./sys_update_set/*.*', './*.log'];

gulp.task('add-files', function() {
   return gulp.src(sourceArray).pipe(git.add());
});

gulp.task('commit-files', function() {
    return gulp.src(sourceArray).pipe(git.commit(options.reason))
               .on('error', console.log);
});

gulp.task('push-files', function() {
    git.push('origin', 'HEAD:master', {args: '-u -f'},  function(err) {
        if (err) throw err;
    });
});