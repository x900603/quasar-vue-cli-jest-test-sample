import { createApp } from "vue";
import { Quasar } from "quasar";
import App from "./App.vue";
import router from "./router";
import quasarUserOptions from "./quasar-user-options";

createApp(App).use(Quasar, quasarUserOptions).use(router).mount("#app");
