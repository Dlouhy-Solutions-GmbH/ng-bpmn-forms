import { ConfigOption } from '@ngx-formly/core';
import { NgxBpmnCheckbox } from './checkbox.type';

export function withCheckbox(): ConfigOption {
  return {
    types: [
      {
        name: 'checkbox',
        component: NgxBpmnCheckbox,
        wrappers: ['form-field'],
      },
      {
        name: 'boolean',
        extends: 'checkbox',
      },
    ],
  };
}
