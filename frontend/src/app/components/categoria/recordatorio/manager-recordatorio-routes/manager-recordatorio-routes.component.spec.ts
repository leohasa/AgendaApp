import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRecordatorioRoutesComponent } from './manager-recordatorio-routes.component';

describe('ManagerRecordatorioRoutesComponent', () => {
  let component: ManagerRecordatorioRoutesComponent;
  let fixture: ComponentFixture<ManagerRecordatorioRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRecordatorioRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRecordatorioRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
