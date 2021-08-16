import type { App } from "vue";
import vueAnimateNumber from "../number";
import developNumber from "../develop";
export { vueAnimateNumber, developNumber };
console.log(vueAnimateNumber, developNumber);
const install = (app: App): void => {
  developNumber(app);
  vueAnimateNumber(app);
};

const crisUI = {
  install,
};
export default crisUI;
