import { vueAnimateNumber } from "./vueAnimateNumber";
/** Alert Component */
import { App } from "vue";
export interface InstallationOptions {
  locale: any;
  i18n: any;
  size: string;
}
export function install(app: App, options: InstallationOptions): void;
export class crisAnimateNumber extends vueAnimateNumber {}
