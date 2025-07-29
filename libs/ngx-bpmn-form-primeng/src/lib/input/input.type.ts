import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyAttributes } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { InputText } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-bpmn-field-primeng-input',
  template: `
    @if (props.type !== 'number') {
    <input
      class="w-full"
      pInputText
      [type]="props.type || 'text'"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
    } @else {
    <input
      class="w-full"
      type="number"
      pInputText
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputText, ReactiveFormsModule, FormlyAttributes],
})
export class NgxBpmnInput extends FieldType<
  FieldTypeConfig<FormlyFieldProps>
> {}
