import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-calendario-mes',
    templateUrl: './calendario-mes.component.html',
    styleUrls: ['./calendario-mes.component.css']
})
export class CalendarioMesComponent implements OnInit {

    constructor(private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document) { }

    ngOnInit(): void {
        let elemento = this._document.getElementById('body');
        let script = this._renderer2.createElement('script');
        script.type = 'application/javascript';
        script.src = './assets/calendar-mes/calendar-mes.js';
        this._renderer2.appendChild(elemento, script);
    }

}
