import { TestBed } from '@angular/core/testing';

import { ActividadService } from './actividad.service';

describe('ActividadService', () => {
  let service: ActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
