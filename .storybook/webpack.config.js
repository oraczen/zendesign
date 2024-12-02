module.exports = ({ config }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['@babel/preset-env', { targets: "defaults" }],
          '@babel/preset-typescript',
          '@babel/preset-react'
        ],
      },
    });
    
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  };