# prebuildify-load

Build tool and bindings loader for native modules that supports prebuilds.

```
npm install prebuildify-load
```

Use together with [prebuildify](https://github.com/mafintosh/prebuildify) to easily support prebuilds for your native modules.

## Usage

`prebuildify-load` works similar to `node-gyp build` except that it will check if a build or prebuild is present before rebuilding your project.

It's main intended use is as an npm install script and bindings loader for native modules that bundle prebuilds using [prebuildify](https://github.com/mafintosh/prebuildify).

First add `prebuildify-load` to the install script to your native project

``` js
{
  ...
  "scripts": {
    "install": "prebuildify-load || node-gyp build"
  }
}
```

Then in your `index.js`, instead of using the [bindings module](https://www.npmjs.com/package/bindings) use `prebuildify-load` to load your binding.

``` js
var binding = require('prebuildify-load')(__dirname)
```

If you do these two things and bundle prebuilds [prebuildify](https://github.com/mafintosh/prebuildify) your native module will work for most platforms
without having to compile on install time AND will work in both node and electron without the need to recompile between usage.

## License

MIT
