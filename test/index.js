'use strict';

var expect = require('expect');

var MetadataRegistry = require('../');
var DefaultRegistry = require('undertaker-registry');

describe('TaskMetadataRegister', function() {

  it('should be instance of DefaultRegister', function(done) {
    var registry = new MetadataRegistry();
    expect(registry).toBeInstanceOf(DefaultRegistry);
    done();
  });

  it('should register a function', function(done) {
    var registry = new MetadataRegistry();
    expect(registry.get('foo')).toBeUndefined();

    var obj = {};
    var fn = function() { return obj; };
    expect(fn()).toBe(obj);

    var task = registry.set('foo', fn);
    expect(task('foo')).toBe(obj);;

    expect(registry.get('foo')).toBe(task);
    done();
  });

});
