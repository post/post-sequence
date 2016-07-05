import {posthtml, postcss} from './sequence-config.js';

const toKebabCase = plugin => plugin.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
const getPluginName = (namespace, plugin) => `${namespace}-${toKebabCase(plugin)}`;

export default (config, options = {}) => {
	if (!Object.hasOwnProperty.call(options, 'processor')) {
		return config;
	}

	const sequenceConfig = options.processor === 'posthtml' ? posthtml : postcss;

	return Object.assign(
		Object.keys(sequenceConfig)
			.sort((a, b) => sequenceConfig[a].priority - sequenceConfig[b].priority)
			.filter(plugin => {
				return options.namespace ? Object.hasOwnProperty.call(config, getPluginName(options.processor, plugin)) : Object.hasOwnProperty.call(config, plugin);
			})
			.map(plugin => options.namespace ? getPluginName(options.processor, plugin) : plugin)
			.reduce((previousValue, currentValue) => Object.assign({[currentValue]: config[currentValue]}, previousValue), {}),
		config);
};
