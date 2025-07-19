import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection,} from '@angular/core';
import {provideRouter} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideFormlyCore,} from "@ngx-formly/core";
import {withFormlyPrimeNG} from "@ngx-formly/primeng";
import {providePrimeNG} from "primeng/config";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import Aura from '@primeuix/themes/aura';
import {provideHttpClient} from "@angular/common/http";
import {FormlyFieldTextArea} from "./textarea.type";

// export function minItemsValidationMessage(error: any, field: FormlyFieldConfig) {
//   return `should NOT have fewer than ${field.props.minItems} items`;
// }
//
// export function maxItemsValidationMessage(error: any, field: FormlyFieldConfig) {
//   return `should NOT have more than ${field.props.maxItems} items`;
// }
//
// export function minLengthValidationMessage(error: any, field: FormlyFieldConfig) {
//   return `should NOT be shorter than ${field.props.minLength} characters`;
// }
//
// export function maxLengthValidationMessage(error: any, field: FormlyFieldConfig) {
//   return `should NOT be longer than ${field.props.maxLength} characters`;
// }
//
// export function minValidationMessage(error: any, field: FormlyFieldConfig) {
//   return `should be >= ${field.props.min}`;
// }
//
// export function maxValidationMessage(error: any, field: FormlyFieldConfig) {
//   return `should be <= ${field.props.max}`;
// }
//
// export function multipleOfValidationMessage(error: any, field: FormlyFieldConfig) {
//   return `should be multiple of ${field.props.step}`;
// }
//
// export function exclusiveMinimumValidationMessage(error: any, field: FormlyFieldConfig) {
//   return `should be > ${field.props.exclusiveMinimum}`;
// }
//
// export function exclusiveMaximumValidationMessage(error: any, field: FormlyFieldConfig) {
//   return `should be < ${field.props.exclusiveMaximum}`;
// }
//
// export function constValidationMessage(error: any, field: FormlyFieldConfig) {
//   return `should be equal to constant "${field.props.const}"`;
// }
//
// export function typeValidationMessage({ schemaType }: any) {
//   return `should be "${schemaType[0]}".`;
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideFormlyCore([
      ...withFormlyPrimeNG(),
      {
        validationMessages: [
          {name: 'required', message: 'This field is required'},
        ],
        types: [
          {name: 'textarea', component: FormlyFieldTextArea},
          // { name: 'checkbox', component: FormlyFieldCheckbox },
        ],
      }
    ]),
  ],
};
