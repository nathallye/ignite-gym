module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@dtos': './src/dtos',
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@utils': './src/utils',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@contexts': './src/contexts',
          '@routes': './src/routes'
        }
      }
    ]
  ]
};
