import vueAnimateNumber from "../number";
import developNumber from "../develop";
export { vueAnimateNumber, developNumber };
const install = (app) => {
  {
    developNumber(app), vueAnimateNumber(app);
  }
};
const crisUI = {
  install,
};
export default crisUI;
//# sourceMappingURL=index.js.map
