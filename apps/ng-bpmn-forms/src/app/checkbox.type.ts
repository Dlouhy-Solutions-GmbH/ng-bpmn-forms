import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';
import {Checkbox} from "primeng/checkbox";


@Component({
  selector: 'formly-field-primeng-checkbox',
  template: `
    <div class="p-field-checkbox flex items-center gap-1">
      <p-checkbox
        [binary]="true"
        [formControl]="formControl"
        [inputId]="id"
        [id]="undefined"
      />
      <label [for]="id" class="ml-2">{{ props.label }}</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Checkbox,
  ]
})
export class FormlyFieldCheckbox extends FieldType<FieldTypeConfig> {
  override defaultOptions = {props: {hideLabel: true}};
}
