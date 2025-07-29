import { ConfigOption } from '@ngx-formly/core';
import { IftaLabelWrapper } from './ifta-label.wrapper';

export function withIftaLabel(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'ifta-label',
        component: IftaLabelWrapper,
      },
    ],
  };
}
