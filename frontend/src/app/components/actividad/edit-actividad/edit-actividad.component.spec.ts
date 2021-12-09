import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActividadComponent } from './edit-actividad.component';

describe('EditActividadComponent', () => {
  let component: EditActividadComponent;
  let fixture: ComponentFixture<EditActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditActividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
