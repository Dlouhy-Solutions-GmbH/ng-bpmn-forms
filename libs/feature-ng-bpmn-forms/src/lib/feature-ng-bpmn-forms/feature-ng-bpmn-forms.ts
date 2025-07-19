import {Component, computed, inject, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, UntypedFormGroup} from "@angular/forms";
import {FormlyFormOptions, FormlyModule} from "@ngx-formly/core";
import {Button} from "primeng/button";
import {FieldConfigMapper} from "../field-config-mapper";
import {FormJS} from "../fromjs.models";

@Component({
  selector: 'ng-bpmn-forms-feature-ng-bpmn-forms',
  imports: [CommonModule, ReactiveFormsModule, Button, FormlyModule],
  templateUrl: './feature-ng-bpmn-forms.html',
  styleUrl: './feature-ng-bpmn-forms.scss',
})
export class FeatureNgBpmnForms {
  json = input<FormJS | undefined | null>()

  private mapper = inject(FieldConfigMapper);

  form = new UntypedFormGroup({});
  model = {email: 'email@gmail.com'};
  options: FormlyFormOptions = {};
  fields = computed(() => {
    const inputData = this.json()
    if (inputData) {
      return this.mapper.map(inputData)
    }
    return []
  });

  onSubmit(model: any) {
    throw new Error('Method not implemented.');
  }
}
