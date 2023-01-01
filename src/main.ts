import { createApp } from "vue";
import App from "./App.vue";
import "./UI/reset.css";
import "./assets/font/css/font-awesome.min.css";
import Router from "./routes/index";
import "dark-ui/dist/style.css";
import Icon from "./components/Icon/Icon.vue";

const VueApp = createApp(App);
VueApp.component("Icon", Icon);
VueApp.use(Router);
VueApp.mount("#app");
