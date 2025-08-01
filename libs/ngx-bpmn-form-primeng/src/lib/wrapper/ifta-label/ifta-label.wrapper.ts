import { Component } from '@angular/core';
import {
  FieldWrapper,
  FormlyFieldConfig,
  FormlyValidationMessage,
} from '@ngx-formly/core';
import { IftaLabel } from 'primeng/iftalabel';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { Message } from 'primeng/message';

@Component({
  selector: 'ngx-bpmn-ifta-label',
  imports: [IftaLabel, FormlyValidationMessage, Message],
  templateUrl: './ifta-label.wrapper.html',
  styleUrl: './ifta-label.wrapper.scss',
})
export class IftaLabelWrapper extends FieldWrapper<
  FormlyFieldConfig<FormlyFieldProps>
> {}
