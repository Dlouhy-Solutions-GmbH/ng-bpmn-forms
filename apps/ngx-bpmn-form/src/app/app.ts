import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormJS, NgxBpmnForm } from '@ngx-bpmn-form/ngx-bpmn-form-core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { Panel } from 'primeng/panel';
import { Button } from 'primeng/button';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  imports: [
    RouterModule,
    NgxBpmnForm,
    AsyncPipe,
    Panel,
    Button,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private http = inject(HttpClient);
  form = new UntypedFormGroup({});

  data$: Observable<FormJS>;

  constructor() {
    this.data$ = this.http
      .get<FormJS>(`json-schema/form_1.json`)
      .pipe(tap((json) => console.log(json)));
  }

  onSubmit(form: UntypedFormGroup) {
    console.log('Submited Form: ', form.getRawValue());
  }
}
