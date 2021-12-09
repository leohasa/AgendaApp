import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActividadComponent } from './add-actividad.component';

describe('AddActividadComponent', () => {
  let component: AddActividadComponent;
  let fixture: ComponentFixture<AddActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
