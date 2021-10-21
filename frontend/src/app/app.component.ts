import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    sessionStorage = sessionStorage;

    constructor(private router: Router) {}

    ngOnInit(): void {
        if (!sessionStorage.getItem('user')) {
            this.router.navigate(['login']);
        }
    }

    editar(username: String) {
        localStorage.setItem('username', username.toString());
        this.router.navigate(['user/edit']);
    }

    logOut() {
        this.sessionStorage.removeItem('user');
        this.router.navigate(['login']);
    }
}
