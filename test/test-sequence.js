import test from 'ava';
import sequence from '../src';

test('simpe test', t => {
  t.true(typeof sequence === 'function');
});

test('should sort up modules', t => {
  const inputConfig = {
    'posthtml-style-to-file': {
      path: './dist/style.css'
    },
    'posthtml-include': {
      root: './',
      encoding: 'utf-8'
    },
    'posthtml-modules': {}
  };

  const outputConfig = {
    'posthtml-modules': {},
    'posthtml-include': {
      root: './',
      encoding: 'utf-8'
    },
    'posthtml-style-to-file': {
      path: './dist/style.css'
    }
  };

  t.deepEqual(Object.keys(sequence(inputConfig, {processor: 'posthtml'})), Object.keys(outputConfig));
});

test('should return input config', t => {
  const inputConfig = {
    'posthtml-style-to-file': {
      path: './dist/style.css'
    }
  };
  t.deepEqual(sequence(inputConfig), inputConfig);
});

test('should return empty object', t => {
  const inputConfig = {};
  t.falsy(Object.keys(sequence(inputConfig, {processor: 'posthtml'})).length);
});

test('should extend and sort up modules', t => {
  const inputConfig = {
    'posthtml-style-to-file': {},
    'posthtml-include': {},
    'posthtml-modules': {}
  };

  const outputConfig = {
    'posthtml-modules': {},
    'posthtml-style-to-file': {},
    'posthtml-include': {}
  };

  t.deepEqual(
    Object.keys(sequence(
      inputConfig,
      {
        processor: 'posthtml',
        extend: [
          [2, 'posthtml-style-to-file']
        ]
      }
    )),
    Object.keys(outputConfig)
  );
});
