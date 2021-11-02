import { TestBed } from '@angular/core/testing';

import { SharehtmlService } from './sharehtml.service';

describe('SharehtmlService', () => {
  let service: SharehtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharehtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
