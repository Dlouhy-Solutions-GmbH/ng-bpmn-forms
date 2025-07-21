import {Component, computed, inject, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, UntypedFormGroup} from "@angular/forms";
import {FormlyFormOptions, FormlyModule} from "@ngx-formly/core";
import {FieldConfigMapper} from "../field-config-mapper";
import {FormJS} from "../fromjs.models";

@Component({
  selector: 'ng-bpmn-forms-feature-ng-bpmn-forms',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  templateUrl: './feature-ng-bpmn-forms.html',
  styleUrl: './feature-ng-bpmn-forms.scss',
})
export class FeatureNgBpmnForms {
  json = input<FormJS | undefined | null>()
  form = input<UntypedFormGroup>(new UntypedFormGroup({}))

  private mapper = inject(FieldConfigMapper);

  model = {}
  options: FormlyFormOptions = {};
  fields = computed(() => {
    const inputData = this.json()
    if (inputData) {
      this.model = this.mapper.mapModel(inputData);
      console.log('MODEL: ', this.model);
      const fields = this.mapper.map(inputData);
      console.log('FIELDS: ', fields);
      return fields
    }
    return []
  });
}
