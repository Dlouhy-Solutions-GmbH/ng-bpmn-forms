import { ConfigOption } from '@ngx-formly/core';
import { NgxBpmnInput } from './input.type';

export function withInput(): ConfigOption {
  return {
    types: [
      {
        name: 'input',
        component: NgxBpmnInput,
        wrappers: ['ifta-label'],
      },
      { name: 'string', extends: 'input' },
      {
        name: 'number',
        extends: 'input',
        defaultOptions: {
          props: {
            type: 'number',
          },
        },
      },
      {
        name: 'integer',
        extends: 'input',
        defaultOptions: {
          props: {
            type: 'number',
          },
        },
      },
    ],
  };
}
