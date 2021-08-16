import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import { vueAnimateNumber, developNumber } from "../packages/cris-ui/index";
console.log(vueAnimateNumber, developNumber);
app.use(developNumber).mount("#app");
