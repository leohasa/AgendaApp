import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHomepageComponent } from './manager-homepage.component';

describe('ManagerHomepageComponent', () => {
  let component: ManagerHomepageComponent;
  let fixture: ComponentFixture<ManagerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
