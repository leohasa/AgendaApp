import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

	label: string;
	year: number;
	month: number;

	cache = {};
	wrap: any;
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

	constructor() {
		this.year = new Date().getFullYear();
		this.month = new Date().getMonth();
		this.label = `${this.months[this.month]} ${this.year}`;
	}

	ngOnInit(): void {
		this.switchMonth(null, new Date().getMonth(), new Date().getFullYear());
	}

	switchMonth(next:any, month:any, year:any) {
		this.month = month !== undefined ? month : (next ? (this.month === 11 ? 0 : this.month + 1) : (this.month === 0 ? 11 : this.month - 1));
		this.year = year !== undefined ? year : (next && this.month === 0 ? this.year + 1 : (!next && this.month === 11 ? this.year - 1 : this.year));
		this.createCal(this.year, this.month);
	}

	createCal(year:any, month:any) {
		this.label = `${this.months[month]} ${year}`;
		let day = 1, i, j, haveDays = true;
		let startDay = new Date(year, month, day).getDay();
		const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		daysInMonth[1] = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28;
		let calendar: number[][] = [];

		i = 0;
		while(haveDays) {
			calendar[i] = [];
			for(j = 0; j < 7; j++) {
				if(i === 0) {
					if(j === startDay) {
						calendar[i][j] = day++;
						startDay++;
					}
				} else if(day <= daysInMonth[month]) {
					calendar[i][j] = day++;
				} else {
					// calendar[i][j] = '';
					haveDays = false;
				}

				if(day > daysInMonth[month]) {
					haveDays = false;
				}
			}
			i++;
		}
		const table = document.getElementById("table");
		if(table instanceof HTMLTableElement) {
			for(let i = 0; i < table.rows.length; i++) {
				for(let j = 0; j < table.rows[i].cells.length; j++) {
					table.rows[i].cells[j].innerHTML = ``;
					if(i < calendar.length) {
						if(calendar[i][j] !== undefined) {
							table.rows[i].cells[j].innerHTML = `${calendar[i][j]}`;
						}
					}
				}
			}
		}
	}
}
