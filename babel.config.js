const isEnvProd = process.env.NODE_ENV === 'production';

// 组件栈追踪插件
const nonProdPlugins = ['@babel/plugin-transform-react-jsx-source'];

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: isEnvProd ? [] : nonProdPlugins,
};
