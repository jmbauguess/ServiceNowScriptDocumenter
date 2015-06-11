var gulp = require('gulp'),
shell = require('gulp-shell'),
jshint = require('gulp-jshint'),
stylish = require('jshint-stylish'),
runSequence = require('run-sequence'),
gulpJsdoc2md = require("jsdoc-to-markdown"),
commands = {
    instance : 'scrippsdev',
    username : '1.Selenium.Test',
    password : '6isaR0bot'
}

gulp.task('default', function() {
	runSequence('extract', 'jsdoc', 'markdown-server', 'markdown-client', 'markdown-all');
});

gulp.task('extract', shell.task( [
    ('node index.js ' + commands.instance + " " + commands.username + " " + commands.password)
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
    ]))

gulp.task('watch', function() {
    gulp.watch('./sys_script_include/*.js', ['markdown-server']);
    gulp.watch('./sys_ui_script/*.js', ['markdown-client']);
});

gulp.task('jshint-server', function() {
  return gulp.src('./sys_script_include/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter(stylish))
             .pipe(jshint.reporter('fail'))
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