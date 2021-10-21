import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUserRoutesComponent } from './manager-user-routes.component';

describe('ManagerUserRoutesComponent', () => {
  let component: ManagerUserRoutesComponent;
  let fixture: ComponentFixture<ManagerUserRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerUserRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUserRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
