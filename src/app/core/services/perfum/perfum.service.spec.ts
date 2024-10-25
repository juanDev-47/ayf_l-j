import { TestBed } from '@angular/core/testing';

import { PerfumService } from './perfum.service';

describe('PerfumService', () => {
  let service: PerfumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
