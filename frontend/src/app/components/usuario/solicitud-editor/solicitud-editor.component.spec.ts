import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudEditorComponent } from './solicitud-editor.component';

describe('SolicitudEditorComponent', () => {
  let component: SolicitudEditorComponent;
  let fixture: ComponentFixture<SolicitudEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
