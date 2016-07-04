import test from 'ava';
import sequence from '../src/index.js';

test('simpe test', t => {
	t.true(typeof sequence === 'function');
});

test('should sort up include', t => {
	const inputConfig = {
		styleToFile: {
			path: './dist/style.css'
		},
		include: {
			root: './',
			encoding: 'utf-8'
		},
		modules: {}
	};

	const outputConfig = {
		modules: {},
		include: {
			root: './',
			encoding: 'utf-8'
		},
		styleToFile: {
			path: './dist/style.css'
		}
	};

	t.deepEqual(Object.keys(sequence(inputConfig, {processor: 'posthtml'})), Object.keys(outputConfig));
});
