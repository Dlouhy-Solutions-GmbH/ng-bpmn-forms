import { withFormlyPrimeNG } from '@ngx-formly/primeng';
import { withCheckbox } from './checkbox/checkbox.config';
import { withCheckboxGroup } from './checkbox-group/checkbox-group.config';
import { withDatepicker } from './datepicker/datepicker.config';
import { withTextArea } from './textarea/textarea.config';
import { withIftaLabel } from './wrapper/ifta-label/ifta-label.config';
import { withInput } from './input/input.config';
import { withSelect } from './select/select.config';

export function withPrimeNG() {
  return [
    ...withFormlyPrimeNG(),
    withIftaLabel(),
    withSelect(),
    withInput(),
    withCheckboxGroup(),
    withCheckbox(),
    withDatepicker(),
    withTextArea(),
  ];
}
