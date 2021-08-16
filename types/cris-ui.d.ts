import { vueAnimateNumber } from "./vueAnimateNumber";
import { developNumber } from "./developNumber";
/** Alert Component */
import { App } from "vue";
export interface InstallationOptions {
  value: any;
  time: any;
  size: string;
}
export function install(app: App, options: InstallationOptions): void;

export class CrisAnimateNumber extends vueAnimateNumber {}
export class DevelopNumber extends developNumber {}
