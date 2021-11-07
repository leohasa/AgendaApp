import { TestBed } from '@angular/core/testing';

import { PuntuacionService } from './puntuacion.service';

describe('PuntuacionService', () => {
  let service: PuntuacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntuacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
