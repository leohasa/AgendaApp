import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCategoryRoutesComponent } from './manager-category-routes.component';

describe('ManagerCategoryRoutesComponent', () => {
  let component: ManagerCategoryRoutesComponent;
  let fixture: ComponentFixture<ManagerCategoryRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerCategoryRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerCategoryRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
