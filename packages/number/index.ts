import vueAnimateNumber from "./src/index.vue";
import { App } from "vue";
export default (app: App): void => {
  app.component(vueAnimateNumber.name, vueAnimateNumber);
};
export { vueAnimateNumber };
