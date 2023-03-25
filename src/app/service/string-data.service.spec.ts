import { TestBed } from '@angular/core/testing';

import { StringDataService } from './string-data.service';

describe('StringDataService', () => {
  let service: StringDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
