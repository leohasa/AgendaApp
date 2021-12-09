import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntuacionComponent } from './puntuacion.component';

describe('PuntuacionComponent', () => {
  let component: PuntuacionComponent;
  let fixture: ComponentFixture<PuntuacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntuacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
