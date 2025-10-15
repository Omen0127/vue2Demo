const modules = {};
const mockContext = require.context("./", true, /\.js$/);
mockContext.keys().forEach((key) => {
  if (key === "./index.js") return;
  const module = mockContext(key);
  const moduleExports = module.default || module;
  Object.assign(modules, moduleExports);
});
export default modules;
