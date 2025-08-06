# ngx-bpmn-form-primeng

PrimeNG implementation for the ngx-bpmn-form library. This package provides PrimeNG UI components for rendering BPMN forms in Angular applications.

## Installation

```bash
npm install @ngx-bpmn-form/primeng
```

## Usage

Configure the library in your application:

```typescript
// In app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideNgxBpmnFormCore } from '@ngx-bpmn-form/ngx-bpmn-form-core';
import { withPrimeNG } from '@ngx-bpmn-form/primeng';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideNgxBpmnFormCore(withPrimeNG()),
  ],
};
```

Then use the component in your templates:

```html

<form [formGroup]="form" (ngSubmit)="onSubmit(form)">
  <ngx-bpmn-form [json]="formDefinition" [form]="form"></ngx-bpmn-form>
  <p-button type="submit">Submit</p-button>
</form>
```

## Supported PrimeNG Components

This implementation uses the following PrimeNG components:

- InputText for text fields
- InputTextarea for text areas
- InputNumber for numeric fields
- Calendar for date/time fields
- Checkbox for checkboxes
- RadioButton for radio buttons
- Dropdown for select menus

## License

MIT
