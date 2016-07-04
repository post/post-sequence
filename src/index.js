import {posthtml, postcss} from './sequence-config.js';

export default (config, options = {}) => {
	if (!Object.hasOwnProperty.call(options, 'processor')) {
		return config;
	}

	const sequenceConfig = options.processor === 'posthtml' ? posthtml : postcss;

	return Object.assign(
		Object.keys(sequenceConfig)
			.sort((a, b) => sequenceConfig[a].priority - sequenceConfig[b].priority)
			.reduce((previousValue, currentValue) => Object.assign({[currentValue]: config[currentValue]}, previousValue), {}),
		config);
};
