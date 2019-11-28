import cfg from './sequence-config.js';

export default (config, options = {}) => {
  const {processor, extend} = options;
  if (!processor) {
    return config;
  }

  const sequenceConfig = cfg[processor];

  if (extend) {
    extend.forEach(([index, plugin]) => sequenceConfig.splice(index, 0, ...[].concat(plugin)));
  }

  const pluginSequenceConfig = sequenceConfig.filter(plugin => Reflect.has(config, plugin));
  const pluginNotSequenceConfig = Object.keys(config).filter(plugin => !pluginSequenceConfig.includes(plugin));
  const pluginConfig = [...pluginSequenceConfig, ...pluginNotSequenceConfig];
  const reproduceConfig = (previousValue, currentValue) => Object.assign(previousValue, {[currentValue]: config[currentValue]});

  return pluginConfig.reduce(reproduceConfig, {});
};
