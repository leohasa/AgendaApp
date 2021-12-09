import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoriaComponent } from './edit-categoria.component';

describe('EditCategoriaComponent', () => {
  let component: EditCategoriaComponent;
  let fixture: ComponentFixture<EditCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
