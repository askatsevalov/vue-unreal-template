// Import global styles
import "./assets/styles/main.scss";

// Create app
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// Plugins
import i18n from "./i18n";
import router from "./router";
import store from "./store";
import shared from "./shared";
app
  .use(store)
  .use(router)
  .use(shared)
  .use(i18n);

// Utils
import validators from "./utils/validators";
app.use(validators);

// Icons
import "@/icons";

// Mount
app.mount("#app");
