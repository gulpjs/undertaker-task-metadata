'use strict';

var gulp = require('gulp');
var TaskMetadataRegistry = require('../');

gulp.registry(new TaskMetadataRegistry());

gulp.task('test', function(cb) {
  console.log(this);
  this.count = this.count || 0;
  this.count += 1;
  cb();
});

gulp.task('default', gulp.series('test', 'test', 'test', 'test', 'test'));
