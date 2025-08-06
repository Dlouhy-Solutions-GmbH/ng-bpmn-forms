# ngx-bpmn-form-core

Core library for the ngx-bpmn-form project. This package provides the foundation for rendering BPMN form definitions in Angular applications.

## Installation

```bash
npm install @ngx-bpmn-form/core
```

## Features

- Parse and process BPMN form JSON schemas
- Convert BPMN form definitions to Angular form configurations
- Support for various form components:
  - Text fields
  - Text areas
  - Number inputs
  - Date/time pickers
  - Checkboxes
  - Checkbox groups
  - Radio buttons
  - Select dropdowns
- Validation support
- Integration with ngx-formly

## Usage

The core library provides the base functionality that UI implementations like `@ngx-bpmn-form/primeng` build upon.

```typescript
// In app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideNgxBpmnFormCore } from '@ngx-bpmn-form/ngx-bpmn-form-core';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideNgxBpmnFormCore(),
  ],
};
```

## API Reference

### NgxBpmnForm

The main module that provides the form rendering functionality.

Inputs:

- `json`: FormJS - The BPMN form definition
- `form`: UntypedFormGroup - The Angular form group

## License

MIT
