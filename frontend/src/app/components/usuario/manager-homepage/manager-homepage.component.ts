import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/model/rol';
import { DataService } from 'src/app/service/data.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-manager-homepage',
    templateUrl: './manager-homepage.component.html',
    styleUrls: ['./manager-homepage.component.css']
})
export class ManagerHomepageComponent implements OnInit {

    constructor(private router: Router, private service:UsuarioService, private dataService: DataService) {}

    ngOnInit(): void {
        let username: string = localStorage.getItem('user') ?? '';
        this.service.getRols(username)
            .subscribe(data => {
                this.dataService.updateData(data);
                if (data.find(r => r.tipo == 'USUARIO')) {
                    this.router.navigate(['/calendar-mes']);
                } else if (data.find(r => r.tipo == 'ADMINISTRADOR')) {
                    this.router.navigate(['/admin/solicitudes']);
                } else if(data.find(r => r.tipo == 'EDITOR')) {
                    this.router.navigate(['/plugin/list']);
                }
            });
    }

}
