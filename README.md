<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# undertaker-task-metadata

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Gitter chat][gitter-image]][gitter-url]

Proof-of-concept custom registry that attaches metadata to each task.

## Example

```js
var gulp = require('gulp');
var TaskMetadata = require('undertaker-task-metadata');

gulp.registry(new TaskMetadata());

gulp.task('default', function(cb) {
  // this.name === 'default'
  cb();
});
```

## API

### TaskMetadataRegistry

Constructor for the registry. Pass an instance of this registry to `gulp.registry`.

## License

MIT

[downloads-image]: http://img.shields.io/npm/dm/undertaker-task-metadata.svg
[npm-url]: https://npmjs.org/package/undertaker-task-metadata
[npm-image]: http://img.shields.io/npm/v/undertaker-task-metadata.svg

[travis-url]: https://travis-ci.org/gulpjs/undertaker-task-metadata
[travis-image]: http://img.shields.io/travis/gulpjs/undertaker-task-metadata.svg

[gitter-url]: https://gitter.im/gulpjs/gulp
[gitter-image]: https://badges.gitter.im/gulpjs/gulp.png
