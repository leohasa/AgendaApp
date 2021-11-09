import { Component, Input, OnInit } from '@angular/core';
import { Actividad } from '../model/actividad';
import { ActividadService } from '../service/actividad.service';

@Component({
    selector: 'app-activity-modal',
    templateUrl: './activity-modal.component.html',
    styleUrls: ['./activity-modal.component.css'],
})
export class ActivityModalComponent implements OnInit {

	activity?: Actividad;
	@Input() set setId(id: string) {
		this.service.getById(id)
			.subscribe(data => {
				if(data) {
					this.activity = data;
				}
			});
	}

    constructor(private service: ActividadService) {}

    ngOnInit(): void {}
}
