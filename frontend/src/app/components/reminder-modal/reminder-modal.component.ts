import { Component, Input, OnInit } from '@angular/core';
import { Recordatorio } from '../../model/recordatorio';
import { RecordatorioService } from '../../service/recordatorio.service';

@Component({
    selector: 'app-reminder-modal',
    templateUrl: './reminder-modal.component.html',
    styleUrls: ['./reminder-modal.component.css'],
})
export class ReminderModalComponent implements OnInit {

	reminder?: Recordatorio;
	@Input() set setId(id: number) {
		this.service.getById(id)
			.subscribe(data => {
				if(data) {
					this.reminder = data;
				}
			});
	}

    constructor(private service: RecordatorioService) {}

    ngOnInit(): void {}
}
