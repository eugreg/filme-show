import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Toaster from '@meforma/vue-toaster';

import "./assets/main.css";


const app = createApp(App);

app.use(Toaster);
app.use(router);

app.use(createPinia());

app.mount("#app");
