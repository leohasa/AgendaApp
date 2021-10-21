import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProjectRoutesComponent } from './manager-project-routes.component';

describe('ManagerProjectRoutesComponent', () => {
  let component: ManagerProjectRoutesComponent;
  let fixture: ComponentFixture<ManagerProjectRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerProjectRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerProjectRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
