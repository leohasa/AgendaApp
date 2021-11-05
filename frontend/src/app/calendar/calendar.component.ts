import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../service/actividad.service';
import { Actividad } from 'src/app/model/actividad';

declare var Moon: any;
declare var bootstrap: any;

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

	outputDate: Date;
	activities: ({ start: Date, end: Date, activity: Actividad })[];
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
		"badge bg-secondary",
		"badge bg-warning text-dark",
		"badge bg-success",
		"badge bg-danger"
	];
	day: string = "";
	day_number: number;

	constructor(private service: ActividadService) {
		this.year = new Date().getFullYear();
		this.month = new Date().getMonth();
		this.label = `${this.months[this.month]} ${this.year}`;
		this.activities = [];
		this.day_number = 1;
		this.outputDate = new Date();
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
				this.switchMonth(undefined, new Date().getMonth(), new Date().getFullYear());
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
		// tmp.setHours(0);
		// tmp.setMinutes(0);
		// tmp.setSeconds(0);

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

							if(year === today.getFullYear() && month === today.getMonth() && calendar[i][j] === today.getDate()) {
								const span = document.createElement("span");
								span.classList.add("badge");
								span.classList.add("bg-primary");
								span.classList.add("fs-6");
								span.innerHTML = `${calendar[i][j]}`;
								span.setAttribute("data-day", `${calendar[i][j]}`);
								span.setAttribute("data-month", `${month}`);
								span.setAttribute("data-year", `${year}`);
								span.style.cursor = "pointer";

								span.onclick = () => this.showModalActivity(span);

								td.appendChild(span);
								this.renderActivities(td, calendar[i][j], activities1, tmp);
							} else {
								// data-bs-toggle="modal" data-bs-target="#modalActividad"
								const span = document.createElement("span");
								span.classList.add("badge");
								span.classList.add("bg-light");
								span.classList.add("text-dark");
								span.classList.add("fs-6");
								span.innerHTML = `${calendar[i][j]}`;
								span.setAttribute("data-day", `${calendar[i][j]}`);
								span.setAttribute("data-month", `${month}`);
								span.setAttribute("data-year", `${year}`);
								span.style.cursor = "pointer";

								span.onclick = () => this.showModalActivity(span);

								td.appendChild(span);
								this.renderActivities(td, calendar[i][j], activities1, tmp);
							}
						}
					}
				}
			}
		}
	}

	/* renderizar actividades aqui */
	renderActivities(td: HTMLTableCellElement, date: number, activities: { start: Date, end: Date, activity: Actividad }[], current: Date) {
		const tmp = activities;
		if(tmp.length > 0) {
			// console.log(date, tmp);
			const div = document.createElement("div");
			td.appendChild(div);
			for (let i = 0; i < tmp.length && i < 3; i++) {
				if(i === 2) {
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
					this.getClass(i).forEach(s => span.classList.add(s));
					span.textContent = tmp[i].activity.titulo;
					span.setAttribute("data-id", tmp[i].activity.id);
					div.appendChild(span);
					div.appendChild(document.createElement("br"));
					// const span = `<span class="${this.getClass(i)}">${this.getTittle(`${tmp[i]?.activity.titulo}`)}</span><br>`;
					// div.innerHTML += span;
				}
			}
		}
	}

	showModal(span: HTMLElement) {
		const date = new Date();
		date.setDate(Number(span.dataset.day));
		date.setMonth(Number(span.dataset.month));
		date.setFullYear(Number(span.dataset.year));
		const modal = new bootstrap.Modal(document.querySelector("#modal-info"), { focus: true });
		const body = document.querySelector("#modal-body");

		/* activiidades por fecha */
		if(body) {
			body.innerHTML = '';
			this.activities.
				filter(a => date >= a.start && date <= a.end)
				.forEach((a, index) => {
					const span = document.createElement("span");
					this.getClass(index).forEach(s => span.classList.add(s));
					span.classList.add("fs-6");
					span.classList.add("my-1");
					span.textContent = a.activity.titulo;
					span.setAttribute("data-id", a.activity.id);
					body.appendChild(span);
					body.appendChild(document.createElement("br"));
					// body.innerHTML += `<span class="${this.getClass(index)} fs-6 my-1">${a.activity.titulo}</span><br>`;
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
				this.switchMonth(undefined, this.month, this.year);
			});
	}
}
