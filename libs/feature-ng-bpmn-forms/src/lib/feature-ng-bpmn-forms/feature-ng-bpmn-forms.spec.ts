import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FeatureNgBpmnForms} from './feature-ng-bpmn-forms';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {FieldConfigMapper} from "../field-config-mapper";
import {FormlyModule} from "@ngx-formly/core";

describe('FeatureNgBpmnForms', () => {
  let component: FeatureNgBpmnForms;
  let fixture: ComponentFixture<FeatureNgBpmnForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureNgBpmnForms, FormlyModule.forRoot({})],
      providers: [provideHttpClient(), provideHttpClientTesting(), FieldConfigMapper],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureNgBpmnForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
