import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgBpmnForm} from './ng-bpmn-form.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {FieldConfigMapper} from "../field-config-mapper";
import {FormlyModule} from "@ngx-formly/core";

describe('FeatureNgBpmnForms', () => {
  let component: NgBpmnForm;
  let fixture: ComponentFixture<NgBpmnForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgBpmnForm, FormlyModule.forRoot({})],
      providers: [provideHttpClient(), provideHttpClientTesting(), FieldConfigMapper],
    }).compileComponents();

    fixture = TestBed.createComponent(NgBpmnForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
