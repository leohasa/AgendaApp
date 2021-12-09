import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerActividadRoutesComponent } from './manager-actividad-routes.component';

describe('ManagerActividadRoutesComponent', () => {
  let component: ManagerActividadRoutesComponent;
  let fixture: ComponentFixture<ManagerActividadRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerActividadRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerActividadRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
