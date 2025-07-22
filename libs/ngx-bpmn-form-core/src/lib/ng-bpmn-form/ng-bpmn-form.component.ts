import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FieldConfigMapper } from '../field-config-mapper';
import { FormJS } from '../fromjs.models';

@Component({
  selector: 'ngx-bpmn-form',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  templateUrl: './ng-bpmn-form.component.html',
  styleUrl: './ng-bpmn-form.component.scss',
})
export class NgBpmnForm {
  json = input<FormJS | undefined | null>();
  form = input<UntypedFormGroup>(new UntypedFormGroup({}));

  private readonly mapper = inject(FieldConfigMapper);

  model: Record<string, string> = {};
  fields = computed(() => this.generateFormFields());

  private generateFormFields(): FormlyFieldConfig[] {
    const inputData = this.json();

    if (!inputData) {
      return [];
    }

    this.updateFormModel(inputData);
    const fields = this.mapper.map(inputData);
    console.log('FIELDS: ', fields);
    return fields;
  }

  private updateFormModel(data: FormJS): void {
    this.model = this.mapper.mapModel(data);
    console.log('MODEL: ', this.model);
  }
}
