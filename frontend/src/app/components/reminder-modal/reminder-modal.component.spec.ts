import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderModalComponent } from './reminder-modal.component';

describe('ReminderModalComponent', () => {
    let component: ReminderModalComponent;
    let fixture: ComponentFixture<ReminderModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReminderModalComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReminderModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
