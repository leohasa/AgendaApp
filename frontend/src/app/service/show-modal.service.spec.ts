import { TestBed } from '@angular/core/testing';

import { ShowModalService } from './show-modal.service';

describe('ShowModalService', () => {
  let service: ShowModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
