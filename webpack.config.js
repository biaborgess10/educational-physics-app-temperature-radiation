const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['@react-navigation']
    }
  }, argv);

  // Override the existing rules for image files
  config.module.rules = config.module.rules.map(rule => {
    if (rule.test && rule.test.toString().includes('png|jpg|jpeg|gif|ico')) {
      return {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]'
        }
      };
    }
    return rule;
  });

  return config;
};
