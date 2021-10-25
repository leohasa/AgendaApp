import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
    selector: 'app-edit-categoria',
    templateUrl: './edit-categoria.component.html',
    styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

    categoria: Categoria;

    constructor(private router: Router, private service: CategoriaService) {
        this.categoria = new Categoria();
    }

    ngOnInit(): void {
        this.getCategoria();
    }

    getCategoria() {
        let idC = localStorage.getItem('idCat') ?? '';
        this.service.getCategoriaById(idC)
        .subscribe(data => {
            this.categoria = data;
        });
    }

    onSubmit() {
        this.service.updateUsuario(this.categoria)
        .subscribe(data => {
            alert('Categoria actualizada correctamente!');
            this.backList();
        });
    }

    backList() {
        this.router.navigate(['/categoria/list']);
    }

}
