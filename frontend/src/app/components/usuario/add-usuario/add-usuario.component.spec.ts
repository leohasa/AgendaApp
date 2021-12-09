import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsuarioComponent } from './add-usuario.component';

describe('AddUsuarioComponent', () => {
  let component: AddUsuarioComponent;
  let fixture: ComponentFixture<AddUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
