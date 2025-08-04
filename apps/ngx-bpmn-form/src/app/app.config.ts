import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeuix/themes/aura';
import { provideHttpClient } from '@angular/common/http';
import { withPrimeNG } from '@ngx-bpmn-form/primeng';
import { provideNgxBpmnFormCore } from '@ngx-bpmn-form/ngx-bpmn-form-core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideNgxBpmnFormCore([
      ...withPrimeNG(),
      {
        validationMessages: [
          { name: 'required', message: 'This field is required' },
        ],
      },
    ]),
  ],
};
