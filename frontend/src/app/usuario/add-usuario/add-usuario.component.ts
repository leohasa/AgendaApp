import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-add-usuario',
    templateUrl: './add-usuario.component.html',
    styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

    usuario: Usuario;

    constructor(private router:Router, private service: UsuarioService) {
        this.usuario = new Usuario();
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.service.createUser(this.usuario)
        .subscribe(data => {
            alert('Agregado con exito');
            this.router.navigate(['listUser']);
        });
    }

    backList() {
        this.router.navigate(['listUser']);
    }

}
