import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import { developNumber, vueAnimateNumber } from "../packages/cris-ui/index";
app.use(developNumber).use(vueAnimateNumber).mount("#app");
