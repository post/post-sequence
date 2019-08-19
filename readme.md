# post-sequence

> Sequence for configuration [posthtml](https://github.com/posthtml) and [postcss](https://github.com/postcss), sorts the configuration file based on the internal configurator.

[![Travis Build Status](https://img.shields.io/travis/post/post-sequence/master.svg?style=flat-square&label=unix)](https://travis-ci.org/post/post-sequence)[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/GitScrum/post-sequence/master.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/post/post-sequence)[![node](https://img.shields.io/node/v/post-sequence.svg?maxAge=2592000&style=flat-square)]()[![npm version](https://img.shields.io/npm/v/post-sequence.svg?style=flat-square)](https://www.npmjs.com/package/post-sequence)[![Dependency Status](https://david-dm.org/post/post-sequence.svg?style=flat-square)](https://david-dm.org/post/post-sequence)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)[![Coveralls status](https://img.shields.io/coveralls/post/post-sequence.svg?style=flat-square)](https://coveralls.io/r/post/post-sequence)

[![npm downloads](https://img.shields.io/npm/dm/post-sequence.svg?style=flat-square)](https://www.npmjs.com/package/post-sequence)[![npm](https://img.shields.io/npm/dt/post-sequence.svg?style=flat-square)](https://www.npmjs.com/package/post-sequence)[![Package Quality](http://npm.packagequality.com/shield/post-sequence.svg?style=flat-square)](http://packagequality.com/#?package=post-sequence)

## Why?
Saves you from possible errors in the processing due to wrong wiring sequence plug-ins. You just pass in a configuration object of your processor, type of processor and reappointment or extension for internal configurator.

## Install

```bash
$ npm i -S post-sequence
```
> **Note:** This project is compatible with node v8+

## Usage

```js
import sequence from 'post-sequence';

const posthtmlConfig = {
  'posthtml-bem': {
    elemPrefix: '__',
    modPrefix: '-',
    modDlmtr: '--'
  },
  'posthtml-include': {
    root: './',
    encoding: 'utf-8'
  },
  'posthtml-style-to-file': {
    path: './dist/style.css'
  }
};

sequence(posthtmlConfig, {processor: 'posthtml', extend: [2, 'posthtml-style-to-file']});
// Return ==> {"posthtml-include": {...}, "posthtml-style-to-file": {...}, "posthtml-bem": {...}}
```
Returns your config sorted according to the internal configuration or according to the extended.

## posthtml configuration sequence
<img align="left" width="95" height="130" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

```json
[
  "posthtml-include",
  "posthtml-modules",
  "posthtml-inline-assets",
  "posthtml-inline-css",
  "posthtml-beautify"
]
```

## postcss configuration sequence
<img align="left" width="95" height="95" title="PostCSS" src="http://postcss.github.io/postcss/logo.svg">

```json
[
  "postcss-devtools",
  "postcss-easy-import",
  "postcss-import",
  "postcss-each",
  "postcss-mixins",
  "postcss-at-rules-variables",
  "postcss-custom-properties",
  "postcss-for",
  "postcss-conditionals",
  "postcss-nested",
  "postcss-sorting",
  "postcss-style-guide",
  "postcss-discard-comments",
  "postcss-csso"
]
```

## Options

#### `processor` 
Type: `string<posthtml|postcss>`  
Default: ``  


#### `extend`
Type: `array<array>`  
Default: `[]`  
Value: `[index, ['plugin-name', ...]]`  
*To determine the correct index, see the [config](https://github.com/post/post-sequence/blob/master/src/sequence-config.js)*  
