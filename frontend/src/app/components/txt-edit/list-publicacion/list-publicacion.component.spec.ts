import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublicacionComponent } from './list-publicacion.component';

describe('ListPublicacionComponent', () => {
  let component: ListPublicacionComponent;
  let fixture: ComponentFixture<ListPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
