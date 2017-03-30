# post-sequence

> Sequence for configuration [posthtml](https://github.com/posthtml) and [postcss](https://github.com/postcss), sorts the configuration file based on the internal configurator.

[![Travis Build Status](https://img.shields.io/travis/post-org/post-sequence.svg?style=flat-square&label=unix)](https://travis-ci.org/post-org/post-sequence)[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/post-org/post-sequence.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/post-org/post-sequence)[![node](https://img.shields.io/node/v/post-sequence.svg?maxAge=2592000&style=flat-square)]()[![npm version](https://img.shields.io/npm/v/post-sequence.svg?style=flat-square)](https://www.npmjs.com/package/post-sequence)[![Dependency Status](https://david-dm.org/post-org/post-sequence.svg?style=flat-square)](https://david-dm.org/post-org/post-sequence)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)[![Coveralls status](https://img.shields.io/coveralls/post-org/post-sequence.svg?style=flat-square)](https://coveralls.io/r/post-org/post-sequence)

[![npm downloads](https://img.shields.io/npm/dm/post-sequence.svg?style=flat-square)](https://www.npmjs.com/package/post-sequence)[![npm](https://img.shields.io/npm/dt/post-sequence.svg?style=flat-square)](https://www.npmjs.com/package/post-sequence)[![Package Quality](http://npm.packagequality.com/shield/post-sequence.svg?style=flat-square)](http://packagequality.com/#?package=post-sequence)[![Greenkeeper badge](https://badges.greenkeeper.io/post-org/post-sequence.svg?style=flat-square)](https://greenkeeper.io/)

## Why?
Saves you from possible errors in the processing due to wrong wiring sequence plug-ins. You just pass in a configuration object of your processor, type of processor and reappointment or extension for internal configurator.

## Install

```bash
$ npm i -S post-sequence
```
> **Note:** This project is compatible with node v4+

## Usage

```js
import sequence from 'post-sequence';

const posthtmlConfig = {
  bem: {
      elemPrefix: '__',
      modPrefix: '-',
      modDlmtr: '--'
  },
  include: {
      root: './',
      encoding: 'utf-8'
  },
  styleToFile: {
      path: './dist/style.css'
  }
};

sequence(posthtmlConfig, {processor: 'posthtml', extend: {}, namespace: false});
// Return ==> {"include": {...}, "bem": {...}, "styleToFile": {...}}
```
Returns your config sorted according to the internal configuration or according to the extended.

## posthtml configuration sequence
<img align="left" width="95" height="130" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

```json
{
  "include": {
    "priority": 998
  },
  "modules": {
    "priority": 999
  },
  "inlineAssets": {
    "priority": 2
  },
  "inlineCss": {
    "priority": 1
  },
  "beautify": {
    "priority": 0
  }
}
```

## postcss configuration sequence
<img align="left" width="95" height="95" title="PostCSS" src="http://postcss.github.io/postcss/logo.svg">

```json
{
  "devtools": {
    "priority": 9999
  },
  "easyImport": {
    "priority": 9998
  },
  "import": {
    "priority": 9998
  },
  "each": {
    "priority": 9997
  },
  "mixins": {
    "priority": 9996
  },
  "atRulesVariables": {
    "priority": 9995
  },
  "customProperties": {
    "priority": 9994
  },
  "for": {
    "priority": 9993
  },
  "conditionals": {
    "priority": 9992
  },
  "nested": {
    "priority": 9991
  },
  "sorting": {
    "priority": 9990
  },
  "styleGuide": {
    "priority": 9989
  },
  "discardComments": {
    "priority": 9988
  },
  "csso": {
    "priority": 9987
  }
}
```

## Options

#### `processor` 
Type: `string`  
Default: ``  
*Takes the processor type. There are two types posthtml and postcss*


#### `extend`
Type: `object`  
Default: `{}`  
*The extend has a higher priority, and in the case of crossing names of the plugins value is transferred to the extension will be higher than the internal configuration.*

#### `namespace`
Type: `boolean`  
Default: `false`  
*Value set to true will consider that your config contains the names of plugins with a prefix of processor*

## Example

### Use option `namespace`
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
  }
};

sequence(posthtmlConfig, {processor: 'posthtml', namespace: true});
// Return ==> {"posthtml-include": {...}, "posthtml-bem": {...}}
```

## LICENSE

> MIT License (MIT)

>Copyright (c) Ivan Demidov <scrum@list.ru>

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
