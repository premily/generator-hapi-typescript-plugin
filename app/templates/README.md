# hapi-typescript-plugin

This is a very basic template to write [HapiJs-Plugins](http://hapijs.com/api#plugins) with TypeScript.

It has a gulptask included to compile the source to JavaScript. This task is also referenced in the package.json as postinstall script.

## Tests

Tests can be run with `npm test` or `make test`, `make test-cov` and `test-cov-html`.
Note:  `npm test` points to `make test-cov`. This is inspired from many hapi plugins.