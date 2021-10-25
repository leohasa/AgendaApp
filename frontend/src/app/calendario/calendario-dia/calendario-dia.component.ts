import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-calendario-dia',
    templateUrl: './calendario-dia.component.html',
    styleUrls: ['./calendario-dia.component.css']
})
export class CalendarioDiaComponent implements OnInit {

    constructor(private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document,
        private router: Router) { }

    ngOnInit(): void {
        if (!sessionStorage.getItem('user')) {
            this.router.navigate(['/login']);
        }
        let elemento = this._document.getElementById('body');
        let script = this._renderer2.createElement('script');
        script.type = 'application/javascript';
        script.src = './assets/calendar-dia.js';
        this._renderer2.appendChild(elemento, script);
    }

}
