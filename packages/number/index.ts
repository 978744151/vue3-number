import vueAnimateNumber from "./src/index.vue";
console.log(vueAnimateNumber);
import { App } from "vue";
export default (app: App): void => {
  app.component(vueAnimateNumber.name, vueAnimateNumber);
};
export { vueAnimateNumber };
