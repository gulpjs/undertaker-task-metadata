"use strict";

var assert = require("node:assert");
var { describe, it } = require("node:test");

var MetadataRegistry = require("../");
var DefaultRegistry = require("undertaker-registry");

describe("TaskMetadataRegister", function () {
  it("should be instance of DefaultRegister", function () {
    var registry = new MetadataRegistry();
    assert.ok(registry instanceof DefaultRegistry);
  });

  it("should register a function", function () {
    var registry = new MetadataRegistry();
    assert.strictEqual(registry.get("foo"), undefined);

    var obj = {};
    var fn = function () {
      return obj;
    };
    assert.strictEqual(fn(), obj);

    var task = registry.set("foo", fn);

    assert.strictEqual(task("foo"), obj);
    assert.strictEqual(registry.get("foo"), task);
  });
});
