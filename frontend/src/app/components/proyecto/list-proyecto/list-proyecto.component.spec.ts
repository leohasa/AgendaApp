import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProyectoComponent } from './list-proyecto.component';

describe('ListProyectoComponent', () => {
  let component: ListProyectoComponent;
  let fixture: ComponentFixture<ListProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
