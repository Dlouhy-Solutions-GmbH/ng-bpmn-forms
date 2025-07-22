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
import {FormlyFieldDatepicker} from "./datepicker.type";
import {FormlyFieldCheckboxGroup} from "./checkbox-group.type";

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
          {name: 'datepicker', component: FormlyFieldDatepicker},
          {name: 'checkbox-group', component: FormlyFieldCheckboxGroup},
          // { name: 'checkbox', component: FormlyFieldCheckbox },
        ],
      }
    ]),
  ],
};
