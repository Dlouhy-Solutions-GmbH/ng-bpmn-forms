import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FieldType, FieldTypeConfig, FormlyAttributes} from '@ngx-formly/core';
import {FormlyFieldProps} from '@ngx-formly/primeng/form-field';
import {Textarea} from "primeng/textarea";
import {ReactiveFormsModule} from "@angular/forms";

type TextAreaProps = FormlyFieldProps

@Component({
  selector: 'app-field-primeng-textarea',
  template: ` <textarea [formControl]="formControl" [formlyAttributes]="field" pTextarea class="w-full"></textarea> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Textarea,
    ReactiveFormsModule,
    FormlyAttributes
  ]
})
export class FormlyFieldTextArea extends FieldType<FieldTypeConfig<TextAreaProps>> {
}
