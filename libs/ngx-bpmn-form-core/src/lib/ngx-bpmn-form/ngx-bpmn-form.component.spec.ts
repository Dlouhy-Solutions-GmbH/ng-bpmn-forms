import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxBpmnForm } from './ngx-bpmn-form.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FieldConfigMapper } from '../field-config-mapper';
import { FormlyModule } from '@ngx-formly/core';

describe('FeatureNgBpmnForms', () => {
  let component: NgxBpmnForm;
  let fixture: ComponentFixture<NgxBpmnForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxBpmnForm, FormlyModule.forRoot({})],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        FieldConfigMapper,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxBpmnForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
