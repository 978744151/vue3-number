import developNumber from "./src/index.vue";
import { App } from "vue";
console.log(developNumber);
export default (app: App): void => {
  app.component(developNumber.name, developNumber);
};
export { developNumber };
