import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPluginsComponent } from './mis-plugins.component';

describe('MisPluginsComponent', () => {
  let component: MisPluginsComponent;
  let fixture: ComponentFixture<MisPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisPluginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
