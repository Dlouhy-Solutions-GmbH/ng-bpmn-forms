import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IftaLabelWrapper } from './ifta-label.wrapper';

describe('IftaLabelWrapper', () => {
  let component: IftaLabelWrapper;
  let fixture: ComponentFixture<IftaLabelWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IftaLabelWrapper],
    }).compileComponents();

    fixture = TestBed.createComponent(IftaLabelWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
