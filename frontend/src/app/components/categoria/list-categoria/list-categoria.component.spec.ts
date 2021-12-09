import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriaComponent } from './list-categoria.component';

describe('ListCategoriaComponent', () => {
  let component: ListCategoriaComponent;
  let fixture: ComponentFixture<ListCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
