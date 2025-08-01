import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyAttributes } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import {
  FormlyFieldSelectProps,
  FormlySelectOptionsPipe,
} from '@ngx-formly/core/select';
import { Select } from 'primeng/select';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IftaLabel } from 'primeng/iftalabel';

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
  appendTo?: Select['appendTo'];
  filter?: boolean;
  filterBy?: string;
}

@Component({
  selector: 'ngx-bpmn-field-primeng-select',
  template: `
    <p-iftalabel>
      <p-select
        class="w-full"
        [placeholder]="props.placeholder"
        [options]="
          (props.options | formlySelectOptions : field | async) ?? undefined
        "
        [formControl]="formControl"
        [formlyAttributes]="field"
        [showClear]="!props.required"
        [appendTo]="props.appendTo"
        [filter]="props.filter"
        [filterBy]="props.filterBy ?? 'label'"
        [optionLabel]="'label'"
        [optionValue]="'value'"
        (onChange)="props.change && props.change(field, $event)"
      >
      </p-select>
      <label [for]="id"> {{ props.label }}</label>
    </p-iftalabel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormlySelectOptionsPipe,
    AsyncPipe,
    Select,
    ReactiveFormsModule,
    FormlyAttributes,
    IftaLabel,
  ],
})
export class NgxBpmnSelect extends FieldType<FieldTypeConfig<SelectProps>> {}
