import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPluginsComponent } from './list-plugins.component';

describe('ListPluginsComponent', () => {
  let component: ListPluginsComponent;
  let fixture: ComponentFixture<ListPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPluginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
