import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPostComponent } from './vista-post.component';

describe('VistaPostComponent', () => {
  let component: VistaPostComponent;
  let fixture: ComponentFixture<VistaPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
