import { withFormlyPrimeNG } from '@ngx-formly/primeng';
import { withCheckbox } from './checkbox/checkbox.config';
import { withCheckboxGroup } from './checkbox-group/checkbox-group.config';
import { withDatepicker } from './datepicker/datepicker.config';
import { withTextArea } from './textarea/textarea.config';

export function withPrimeNG() {
  return [
    ...withFormlyPrimeNG(),
    withCheckboxGroup(),
    withCheckbox(),
    withDatepicker(),
    withTextArea(),
  ];
}
