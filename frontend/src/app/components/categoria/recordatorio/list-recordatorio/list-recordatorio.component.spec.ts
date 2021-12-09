import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecordatorioComponent } from './list-recordatorio.component';

describe('ListRecordatorioComponent', () => {
  let component: ListRecordatorioComponent;
  let fixture: ComponentFixture<ListRecordatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecordatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
