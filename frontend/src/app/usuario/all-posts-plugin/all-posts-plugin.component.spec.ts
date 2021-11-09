import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostsPluginComponent } from './all-posts-plugin.component';

describe('AllPostsPluginComponent', () => {
  let component: AllPostsPluginComponent;
  let fixture: ComponentFixture<AllPostsPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPostsPluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostsPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
