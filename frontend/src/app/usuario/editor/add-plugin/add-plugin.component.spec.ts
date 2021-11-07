import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPluginComponent } from './add-plugin.component';

describe('AddPluginComponent', () => {
  let component: AddPluginComponent;
  let fixture: ComponentFixture<AddPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
