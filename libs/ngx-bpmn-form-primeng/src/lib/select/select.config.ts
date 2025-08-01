import { ConfigOption } from '@ngx-formly/core';
import { NgxBpmnSelect } from './select.type';

export function withSelect(): ConfigOption {
  return {
    types: [
      {
        name: 'select',
        component: NgxBpmnSelect,
        wrappers: ['ifta-label'],
      },
      { name: 'enum', extends: 'select' },
    ],
  };
}
