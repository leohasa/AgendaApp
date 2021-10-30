import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtEditComponent } from './txt-edit.component';

describe('TxtEditComponent', () => {
  let component: TxtEditComponent;
  let fixture: ComponentFixture<TxtEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
