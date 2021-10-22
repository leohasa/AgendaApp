import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioMesComponent } from './calendario-mes.component';

describe('CalendarioMesComponent', () => {
  let component: CalendarioMesComponent;
  let fixture: ComponentFixture<CalendarioMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
