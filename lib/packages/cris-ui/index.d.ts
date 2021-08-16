import type { App } from "vue";
import vueAnimateNumber from "../number";
import developNumber from "../develop";
export { vueAnimateNumber, developNumber };
declare const crisUI: {
    install: (app: App) => void;
};
export default crisUI;
