import { Provider } from '@angular/core';
import {
  ConfigOption,
  FormlyConfig,
  provideFormlyConfig,
  provideFormlyCore,
} from '@ngx-formly/core';

export type NgxBpmnFormConfig = FormlyConfig;
export type NgxBpmnConfigOption = ConfigOption;

export const provideNgxBpmnFormCore = (
  configs: NgxBpmnConfigOption | NgxBpmnConfigOption[] = []
): Provider => {
  return provideFormlyCore(configs);
};

export const provideNgxBpmnFormConfig = (
  configs: NgxBpmnConfigOption | NgxBpmnConfigOption[] = []
): Provider => {
  return provideFormlyConfig(configs);
};
