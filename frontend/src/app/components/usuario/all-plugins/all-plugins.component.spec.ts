import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPluginsComponent } from './all-plugins.component';

describe('AllPluginsComponent', () => {
  let component: AllPluginsComponent;
  let fixture: ComponentFixture<AllPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPluginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
