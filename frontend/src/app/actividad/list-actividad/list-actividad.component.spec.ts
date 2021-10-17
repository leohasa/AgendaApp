import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActividadComponent } from './list-actividad.component';

describe('ListActividadComponent', () => {
  let component: ListActividadComponent;
  let fixture: ComponentFixture<ListActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
