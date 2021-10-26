import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    localStorage = localStorage;

    constructor(private router: Router) {}

    ngOnInit(): void {
        if (!localStorage.getItem('user')) {
            // this.router.navigate(['/login']);
        }
    }

    editar(username: String) {
        localStorage.setItem('username', username.toString());
        this.router.navigate(['/user/edit']);
    }

    logOut() {
        this.localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}
