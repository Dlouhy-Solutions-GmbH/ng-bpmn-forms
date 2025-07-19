import {Component, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, ReactiveFormsModule, UntypedFormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions, FormlyModule} from "@ngx-formly/core";
import {Button} from "primeng/button";
import {FormlyJsonschema} from "@ngx-formly/core/json-schema";
import {Subject, takeUntil, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FieldConfigMapper} from "../field-config-mapper";

@Component({
  selector: 'ng-bpmn-forms-feature-ng-bpmn-forms',
  imports: [CommonModule, ReactiveFormsModule, Button, FormlyModule],
  templateUrl: './feature-ng-bpmn-forms.html',
  styleUrl: './feature-ng-bpmn-forms.scss',
})
export class FeatureNgBpmnForms implements OnDestroy {
  private destroy$: Subject<any> = new Subject<boolean>();
  form = new FormGroup({});
  model = {email: 'email@gmail.com'};
  options: FormlyFormOptions | undefined;
  fields: FormlyFieldConfig[] = [];

  constructor(private formlyJsonschema: FormlyJsonschema, private http: HttpClient, private mapper: FieldConfigMapper) {
    this.loadExample();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  loadExample() {
    this.http
      .get<any>(`json-schema/form_1.json`)
      .pipe(
        tap((json) => {
          this.form = new UntypedFormGroup({});
          this.options = {};
          this.fields = this.mapper.map(json);
          console.dir(this.fields);
          // this.model = model;
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  onSubmit(model: any) {
    throw new Error('Method not implemented.');
  }
}
