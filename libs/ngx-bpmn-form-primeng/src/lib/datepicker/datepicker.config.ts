import { ConfigOption } from '@ngx-formly/core';
import { NgxBpmnDatepicker } from './datepicker.type';

export function withDatepicker(): ConfigOption {
  return {
    types: [
      {
        name: 'datepicker',
        component: NgxBpmnDatepicker,
        wrappers: ['form-field'],
      },
    ],
  };
}
