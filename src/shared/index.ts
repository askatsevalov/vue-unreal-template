import { App } from "vue";

export default (app: App): void => {
  const requireContext = require.context(".", true, /[A-Z]\w+\.vue$/);
  requireContext.keys().forEach((fileName) => {
    let config = requireContext(fileName);
    config = config.default || config;
    const name =
      config.name || fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");

    app.component(name, config);
  });
};
