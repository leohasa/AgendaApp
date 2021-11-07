import { TestBed } from '@angular/core/testing';

import { DataPostService } from './data-post.service';

describe('DataPostService', () => {
  let service: DataPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
