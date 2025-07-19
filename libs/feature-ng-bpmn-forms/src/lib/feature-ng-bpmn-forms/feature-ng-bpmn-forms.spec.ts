import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FeatureNgBpmnForms} from './feature-ng-bpmn-forms';

describe('FeatureNgBpmnForms', () => {
  let component: FeatureNgBpmnForms;
  let fixture: ComponentFixture<FeatureNgBpmnForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureNgBpmnForms],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureNgBpmnForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
