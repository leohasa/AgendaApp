import { TestBed } from '@angular/core/testing';

import { RecordatorioService } from './recordatorio.service';

describe('RecordatorioService', () => {
  let service: RecordatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
