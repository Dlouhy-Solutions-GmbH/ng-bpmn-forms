import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { FormlyFieldProps as CheckboxProps } from '@ngx-formly/primeng/form-field';
import { AsyncPipe } from '@angular/common';
import { FormlySelectOptionsPipe } from '@ngx-formly/core/select';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'ngx-bpmn-primeng-checkbox-group',
  template: `
    @for (option of props.options | formlySelectOptions: field | async; track
    index; let index = $index) {
    <div class="p-field-checkbox">
      <p-checkbox
        [name]="field.name || id"
        [formControl]="option.disabled ? disabledControl : formControl"
        [value]="option.value"
        [inputId]="id + index"
      >
      </p-checkbox>
      <label [for]="id + index" class="ml-2">{{ option.label }}</label>
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormlySelectOptionsPipe, AsyncPipe, Checkbox],
})
export class NgxBpmnCheckboxGroup extends FieldType<
  FieldTypeConfig<CheckboxProps>
> {
  get disabledControl() {
    return new UntypedFormControl({
      value: this.formControl.value,
      disabled: true,
    });
  }
}
