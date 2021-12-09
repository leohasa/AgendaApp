import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../service/actividad.service';
import { Actividad } from 'src/app/model/actividad';
import { RecordatorioService } from '../../service/recordatorio.service';
import { Recordatorio } from '../../model/recordatorio';

declare var Moon: any;
declare var bootstrap: any;

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

	reminder: number;
	activity: string;
	outputDate: Date;
	activities: ({ start: Date, end: Date, activity: Actividad })[];
	reminders: { start: Date, reminder: Recordatorio }[];
	moon: any;
	label: string;
	year: number;
	month: number;
	days = [
		"DOMINGO",
		"LUNES",
		"MARTES",
		"MIERCOLES",
		"JUEVES",
		"VIERNES",
		"SABADO"
	];
	months = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	];
	daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	classes = [
		"badge bg-primary",
		"badge bg-danger",
		"badge bg-warning text-dark",
		"badge bg-success",
		"badge bg-secondary"
	];
	day: string = "";
	day_number: number;

	constructor(private service: ActividadService, private recordatorioService: RecordatorioService) {
		this.year = new Date().getFullYear();
		this.month = new Date().getMonth();
		this.label = `${this.months[this.month]} ${this.year}`;
		this.activities = [];
		this.reminders = [];
		this.day_number = 1;
		this.outputDate = new Date();
		this.reminder = 0;
		this.activity = '0';
	}

	ngOnInit(): void {
		this.moon = new Moon(document.querySelector("#ex1"));
		this.service.getByUser(localStorage.getItem('user') ?? '')
			.subscribe(data => {
				this.activities = data.map(a => {
					const start = new Date(Date.parse(a.fechaInicio) + 21600000); /* 21600000 = 3600 * 6 * 1000 */
					const end = new Date(Date.parse(a.fechaFin) + 108000000); /* 21600000 + 1day */
					return { start: start, end: end, activity: a };
				});

				this.recordatorioService.getRecordatorios(localStorage.getItem('user') ?? '')
					.subscribe(data => {
						this.reminders = data.map(r => {
							const start = new Date(Date.parse(r.fecha));
							return { start: start, reminder: r };
						})
						this.switchMonth(undefined, new Date().getMonth(), new Date().getFullYear());
					})
			});
	}

	switchMonth(next:boolean | undefined, month:number | undefined, year:number | undefined) {
		this.month = month !== undefined ? month : (next ? (this.month === 11 ? 0 : this.month + 1) : (this.month === 0 ? 11 : this.month - 1));
		this.year = year !== undefined ? year : (next && this.month === 0 ? this.year + 1 : (!next && this.month === 11 ? this.year - 1 : this.year));
		this.createCal(this.year, this.month);
	}

	createCal(year:number, month:number) {
		/* actividades del mes */
		const tmp = new Date();
		tmp.setFullYear(year);
		tmp.setMonth(month);
		tmp.setHours(0);
		tmp.setMinutes(0);
		tmp.setSeconds(0);

		this.label = `${this.months[month]} ${year}`;
		let day = 1;
		let startDay = new Date(year, month, day).getDay();
		this.daysInMonth[1] = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28;
		let calendar: number[][] = [];

		let i = 0;
		let haveDays = true;
		while(haveDays) {
			calendar[i] = [];
			for(let j = 0; j < 7; j++) {
				if(i === 0) {
					if(j === startDay) {
						calendar[i][j] = day++;
						startDay++;
					}
				} else if(day <= this.daysInMonth[month]) {
					calendar[i][j] = day++;
				} else {
					haveDays = false;
				}

				if(day > this.daysInMonth[month]) {
					haveDays = false;
				}
			}
			i++;
		}

		const today = new Date();
		const table = document.getElementById("table");
		if(table instanceof HTMLTableElement) {
			for(let i = 0; i < table.rows.length; i++) {
				for(let j = 0; j < table.rows[i].cells.length; j++) {
					const td = table.rows[i].cells[j];
					td.innerHTML = '';
					if(i < calendar.length) {
						if(calendar[i][j] !== undefined) {
							tmp.setDate(calendar[i][j]);
							const activities1 = this.activities.filter(a => tmp >= a.start && tmp <= a.end);
							const reminders1 = this.reminders.filter(r => r.start.getFullYear() === year && r.start.getMonth() === month && r.start.getDate() === calendar[i][j]);
							//console.log(tmp, reminders1);

							if(year === today.getFullYear() && month === today.getMonth() && calendar[i][j] === today.getDate()) {
								const span = document.createElement("span");
								// badge bg-warning text-dark
								span.classList.add("badge");
								span.classList.add("bg-warning");
								// span.classList.add("text-dark");
								span.classList.add("fs-5");
								span.innerHTML = `${calendar[i][j]}`;
								span.setAttribute("data-day", `${calendar[i][j]}`);
								span.setAttribute("data-month", `${month}`);
								span.setAttribute("data-year", `${year}`);
								span.style.cursor = "pointer";

								span.onclick = () => this.showModalActivity(span);

								td.appendChild(span);
								if(activities1.length > 0 || reminders1.length > 0) {
									this.renderActivities(td, activities1, reminders1, tmp);
								}
							} else {
								// data-bs-toggle="modal" data-bs-target="#modalActividad"
								const span = document.createElement("span");
								span.classList.add("badge");
								// span.classList.add("bg-light");
								// span.classList.add("text-dark");
								span.classList.add("fs-5");
								span.innerHTML = `${calendar[i][j]}`;
								span.setAttribute("data-day", `${calendar[i][j]}`);
								span.setAttribute("data-month", `${month}`);
								span.setAttribute("data-year", `${year}`);
								span.style.cursor = "pointer";

								span.onclick = () => this.showModalActivity(span);

								td.appendChild(span);
								if(activities1.length > 0 || reminders1.length > 0) {
									this.renderActivities(td, activities1, reminders1, tmp);
								}
							}
						}
					}
				}
			}
		}
	}

	/* renderizar actividades aqui */
	renderActivities(td: HTMLTableCellElement, activities: { start: Date, end: Date, activity: Actividad }[], reminders: { start: Date, reminder: Recordatorio }[], current: Date) {
		let count = 0;
		const div = document.createElement("div");
		td.appendChild(div);

		/* recordatorios */
		for(count = 0; count < reminders.length && count < 3; count++) {
			if(count === 2) {
				/* renderizar ver mas y return */
				const span = document.createElement("span");
				span.classList.add('badge');
				span.classList.add('bg-light');
				span.classList.add("text-dark");
				span.style.cursor = "pointer";
				span.textContent = "Ver mas...";
				span.setAttribute("data-day", current.getDate().toString());
				span.setAttribute("data-month", current.getMonth().toString());
				span.setAttribute("data-year", current.getFullYear().toString());
				span.onclick = () => this.showModal(span);
				div.appendChild(span);
				return;
			} else {
				/* renderizar actividades aqui */
				const span = document.createElement('span');
				this.getClass(count).forEach(s => span.classList.add(s));
				span.classList.add("rounded-pill");
				span.textContent = reminders[count].reminder.titulo;
				span.setAttribute("data-id", reminders[count].reminder.id.toString());
				span.setAttribute("data-kind", "reminder");
				span.style.cursor = "pointer";

				/* mostrar modal recordatorio */
				span.onclick = () => this.showReminderModal(span);
				div.appendChild(span);
				div.appendChild(document.createElement("br"));
			}
		}

		/* actividades */
		for (let i = 0; i < activities.length && count < 3; i++) {
			if(count === 2) {
				const span = document.createElement("span");
				span.classList.add('badge');
				span.classList.add('bg-light');
				span.classList.add("text-dark");
				span.style.cursor = "pointer";
				span.textContent = "Ver mas...";
				span.setAttribute("data-day", current.getDate().toString());
				span.setAttribute("data-month", current.getMonth().toString());
				span.setAttribute("data-year", current.getFullYear().toString());
				span.onclick = () => this.showModal(span);
				div.appendChild(span);
			} else {
				const span = document.createElement('span');
				this.getClass(count).forEach(s => span.classList.add(s));
				span.textContent = activities[i].activity.titulo;
				span.setAttribute("data-id", activities[i].activity.id);
				span.setAttribute("data-kind", "activity");
				span.style.cursor = "pointer";

				/* mostrar modal actividad */
				span.onclick = () => this.showActivityModal(span);
				div.appendChild(span);
				div.appendChild(document.createElement("br"));
			}
			count++;
		}
	}

	showModal(span: HTMLElement) {
		const date = new Date();
		date.setDate(Number(span.dataset.day));
		date.setMonth(Number(span.dataset.month));
		date.setFullYear(Number(span.dataset.year));
		const modal = new bootstrap.Modal(document.querySelector("#modal-info"), { focus: true });
		const body = document.querySelector("#modal-body");
		let i = 0;

		if(body) {
			body.innerHTML = '';
			this.activities.
				filter(a => date >= a.start && date <= a.end)
				.forEach((a, index) => {
					/* renderizar actividades */
					const span = document.createElement("span");
					this.getClass(index).forEach(s => span.classList.add(s));
					span.classList.add("fs-6");
					span.classList.add("my-1");
					span.textContent = a.activity.titulo;
					span.setAttribute("data-id", a.activity.id);
					span.setAttribute("data-kind", "activity");
					span.style.cursor = "pointer";
					span.onclick = () => this.showActivityModal(span);

					body.appendChild(span);
					body.appendChild(document.createElement("br"));
					i = index;
					// body.innerHTML += `<span class="${this.getClass(index)} fs-6 my-1">${a.activity.titulo}</span><br>`;
				});

				i++;
				this.reminders
				.filter(r => r.start.getFullYear() === date.getFullYear() && r.start.getMonth() === date.getMonth() && r.start.getDate() === date.getDate())
				.forEach((r, index) => {
					/* renderizar recordatorios */
					const span = document.createElement("span");
					this.getClass(index + i).forEach(s => span.classList.add(s));
					span.classList.add("rounded-pill");
					span.classList.add("fs-6");
					span.classList.add("my-1");
					span.textContent = r.reminder.titulo;
					span.setAttribute("data-id", r.reminder.id.toString());
					span.setAttribute("data-kind", "reminder");
					span.style.cursor = "pointer";

					/* mostrar modal de recordatorio */
					span.onclick = () => this.showReminderModal(span);
					body.appendChild(span);
					body.appendChild(document.createElement("br"));
				});
		}

		this.day_number = date.getDate();
		this.day = this.days[date.getDay()];
		modal.show();
	}

	getTittle(title: string) {
		if(title.length <= 18) {
			return title;
		} else {
			return `${title.substr(0,15)}...`;
		}
	}

	getClass(i: number): string[] {
		return this.classes[i % this.classes.length].split(" ");
	}

	showModalActivity(span: HTMLElement) {
		this.outputDate = new Date(Number(span.dataset.year), Number(span.dataset.month), Number(span.dataset.day));
		const modal = new bootstrap.Modal(document.querySelector('#modalActividad'), { focus: true });
		setTimeout(() => {
			modal.show();
		}, 200);

	}

	updateCalendar(value: Boolean) {
		this.service.getByUser(localStorage.getItem('user') ?? '')
			.subscribe(data => {
				this.activities = data.map(a => {
					const start = new Date(Date.parse(a.fechaInicio) + 21600000); /* 21600000 = 3600 * 6 * 1000 */
					const end = new Date(Date.parse(a.fechaFin) + 108000000); /* 21600000 + 1day */
					return { start: start, end: end, activity: a };
				});

				this.recordatorioService.getRecordatorios(localStorage.getItem('user') ?? '')
					.subscribe(data => {
						this.reminders = data.map(r => {
							const start = new Date(Date.parse(r.fecha));
							return { start: start, reminder: r };
						})
						this.switchMonth(undefined, this.month, this.year);
					})
			});
	}

	showReminderModal(span: HTMLElement) {
		this.reminder = Number(span.dataset.id ?? 0);
		if(this.reminder) {
			const modal = new bootstrap.Modal(document.querySelector("#reminder-modal"), { focus: true });
			modal.show();
		}
	}

	showActivityModal(span: HTMLElement) {
		this.activity = span.dataset.id ?? '';
		if(this.activity) {
			const modal = new bootstrap.Modal(document.querySelector("#activity-modal"), { focus: true });
			modal.show();
		}
	}
}
