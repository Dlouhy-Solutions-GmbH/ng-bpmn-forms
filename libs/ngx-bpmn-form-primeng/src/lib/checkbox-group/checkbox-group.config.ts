import { ConfigOption } from '@ngx-formly/core';
import { NgxBpmnCheckboxGroup } from './checkbox-group.type';

export function withCheckboxGroup(): ConfigOption {
  return {
    types: [
      {
        name: 'checkbox-group',
        component: NgxBpmnCheckboxGroup,
        wrappers: ['form-field'],
      },
    ],
  };
}
