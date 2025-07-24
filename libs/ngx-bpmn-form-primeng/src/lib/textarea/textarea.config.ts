import { ConfigOption } from '@ngx-formly/core';
import { NgxBpmnTextArea } from './textarea.type';

export function withTextArea(): ConfigOption {
  return {
    types: [
      {
        name: 'textarea',
        component: NgxBpmnTextArea,
        wrappers: ['form-field'],
      },
    ],
  };
}
