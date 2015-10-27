'use strict';

var util = require('util');

var DefaultRegistry = require('undertaker-registry');

function TaskMetadataRegistry() {
  DefaultRegistry.call(this);
}

util.inherits(TaskMetadataRegistry, DefaultRegistry);

TaskMetadataRegistry.prototype.set = function set(name, fn) {
  var metadata = {
    name: name,
  };

  var task = this._tasks[name] = fn.bind(metadata);
  return task;
};

module.exports = TaskMetadataRegistry;
