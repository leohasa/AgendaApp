import { TestBed } from '@angular/core/testing';

import { SeguidorService } from './seguidor.service';

describe('SeguidorService', () => {
  let service: SeguidorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguidorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
