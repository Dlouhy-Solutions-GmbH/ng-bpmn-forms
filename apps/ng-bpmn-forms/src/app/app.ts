import {Component, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FeatureNgBpmnForms} from "@dlouhy-solutions/ng-bpmn-forms";
import {HttpClient} from "@angular/common/http";
import {FormJS} from "../../../../libs/feature-ng-bpmn-forms/src/lib/fromjs.models";
import {AsyncPipe} from "@angular/common";
import {Observable, tap} from "rxjs";

@Component({
  imports: [RouterModule, FeatureNgBpmnForms, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private http = inject(HttpClient);

  data$: Observable<FormJS>

  constructor() {
    this.data$ = this.http.get<FormJS>(`json-schema/form_1.json`).pipe(tap(json => console.log(json)))
  }
}
