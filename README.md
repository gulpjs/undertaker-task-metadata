<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# undertaker-task-metadata

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][ci-image]][ci-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Proof-of-concept custom registry that attaches metadata to each task.

## Example

```js
var gulp = require("gulp");
var TaskMetadata = require("undertaker-task-metadata");

gulp.registry(new TaskMetadata());

gulp.task("default", function (cb) {
  // this.name === 'default'
  cb();
});
```

## API

### TaskMetadataRegistry

Constructor for the registry. Pass an instance of this registry to `gulp.registry`.

## Strict No LLM / No AI Policy

No LLMs for issues.

No LLMs for patches / pull requests.

No LLMs for comments on the bug tracker, including translation.

English is encouraged, but not required. You are welcome to post in your native language and rely on others to have their own translation tools of choice to interpret your words.

## License

MIT

<!-- prettier-ignore-start -->
[downloads-image]: https://img.shields.io/npm/dm/undertaker-task-metadata.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/undertaker-task-metadata
[npm-image]: https://img.shields.io/npm/v/undertaker-task-metadata.svg?style=flat-square

[ci-url]: https://github.com/gulpjs/undertaker-task-metadata/actions/workflows/dev.yml
[ci-image]: https://img.shields.io/github/actions/workflow/status/gulpjs/undertaker-task-metadata/dev.yml?style=flat-square

[coveralls-url]: https://coveralls.io/r/gulpjs/undertaker-task-metadata
[coveralls-image]: https://img.shields.io/coveralls/gulpjs/undertaker-task-metadata/main.svg?style=flat-square
<!-- prettier-ignore-end -->
