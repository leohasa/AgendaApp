import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioDiaComponent } from './calendario-dia.component';

describe('CalendarioDiaComponent', () => {
  let component: CalendarioDiaComponent;
  let fixture: ComponentFixture<CalendarioDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
