import { Component, OnInit } from '@angular/core';

declare var Moon: any;

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

	moon: any;
	label: string;
	year: number;
	month: number;
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

	constructor() {
		this.year = new Date().getFullYear();
		this.month = new Date().getMonth();
		this.label = `${this.months[this.month]} ${this.year}`;
	}

	ngOnInit(): void {
		this.switchMonth(undefined, new Date().getMonth(), new Date().getFullYear());
		this.moon = new Moon(document.querySelector("#ex1"));
		// this.moon.load_moon_phases(this.moon.configMoon, this.moon.example_1);
	}

	switchMonth(next:boolean | undefined, month:number | undefined, year:number | undefined) {
		this.month = month !== undefined ? month : (next ? (this.month === 11 ? 0 : this.month + 1) : (this.month === 0 ? 11 : this.month - 1));
		this.year = year !== undefined ? year : (next && this.month === 0 ? this.year + 1 : (!next && this.month === 11 ? this.year - 1 : this.year));
		this.createCal(this.year, this.month);
	}

	createCal(year:number, month:number) {
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

		const table = document.getElementById("table");
		const today = new Date();
		if(table instanceof HTMLTableElement) {
			for(let i = 0; i < table.rows.length; i++) {
				for(let j = 0; j < table.rows[i].cells.length; j++) {
					table.rows[i].cells[j].innerHTML = '';
					table.rows[i].cells[j].classList.remove('today');
					if(i < calendar.length) {
						if(calendar[i][j] !== undefined) {
							table.rows[i].cells[j].innerHTML = `${calendar[i][j]}`;
							if(year === today.getFullYear() && month === today.getMonth() && calendar[i][j] === today.getDate()) {
								table.rows[i].cells[j].classList.add('today');
							}
						}
					}
				}
			}
		}
	}
}
