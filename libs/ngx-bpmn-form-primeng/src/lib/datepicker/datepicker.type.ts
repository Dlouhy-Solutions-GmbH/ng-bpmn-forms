import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyAttributes } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { DatePicker } from 'primeng/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { IftaLabel } from 'primeng/iftalabel';

interface DatepickerProps extends FormlyFieldProps {
  defaultDate: Date | null;
  dateFormat?: string;
  hourFormat: string;
  showTime: boolean;
  showIcon?: boolean;
  showButtonBar?: boolean;
  showOtherMonths?: boolean;
  selectOtherMonths?: boolean;
  selectionMode?: 'multiple' | 'single' | 'range';
  numberOfMonths: number;
  inline?: boolean;
  readonlyInput?: boolean;
  touchUI?: boolean;
  monthNavigator: boolean;
  yearNavigator?: boolean;
  yearRange?: string;
}

@Component({
  selector: 'ngx-bpmn-field-primeng-datepicker',
  template: `
    <p-iftalabel>
      <p-datepicker
        class="w-full"
        [defaultDate]="props.defaultDate"
        [dateFormat]="props.dateFormat"
        [hourFormat]="props.hourFormat"
        [showTime]="props.showTime"
        [showIcon]="props.showIcon"
        [showButtonBar]="props.showButtonBar"
        [showOtherMonths]="props.showOtherMonths"
        [selectOtherMonths]="props.selectOtherMonths"
        [selectionMode]="props.selectionMode || 'single'"
        [numberOfMonths]="props.numberOfMonths"
        [inline]="props.inline"
        [readonlyInput]="props.readonlyInput"
        [touchUI]="props.touchUI"
        [placeholder]="props.placeholder"
        [formControl]="formControl"
        [formlyAttributes]="field"
      >
      </p-datepicker>
      <label [for]="id"> {{ props.label }}</label>
    </p-iftalabel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePicker, ReactiveFormsModule, FormlyAttributes, IftaLabel],
})
export class NgxBpmnDatepicker extends FieldType<
  FieldTypeConfig<DatepickerProps>
> {
  override defaultOptions?: Partial<FieldTypeConfig<DatepickerProps>> = {
    props: {
      numberOfMonths: 1,
      defaultDate: null,
      hourFormat: '',
      showTime: false,
      monthNavigator: false,
    },
  };
}
