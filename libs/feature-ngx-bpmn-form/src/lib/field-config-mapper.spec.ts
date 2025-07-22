import { TestBed } from '@angular/core/testing';

import { FieldConfigMapper } from './field-config-mapper';

describe('FieldConfigMapper', () => {
  let service: FieldConfigMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldConfigMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
