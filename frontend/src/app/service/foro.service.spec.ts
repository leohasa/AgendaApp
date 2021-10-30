import { TestBed } from '@angular/core/testing';

import { ForoService } from './foro.service';

describe('ForoService', () => {
  let service: ForoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
