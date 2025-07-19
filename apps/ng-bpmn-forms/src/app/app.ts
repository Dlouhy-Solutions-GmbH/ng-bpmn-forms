import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FeatureNgBpmnForms} from "@dlouhy-solutions/ng-bpmn-forms";

@Component({
  imports: [RouterModule, FeatureNgBpmnForms],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ng-bpmn-forms';
}
