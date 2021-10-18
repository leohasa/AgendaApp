import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
    selector: 'app-list-categoria',
    templateUrl: './list-categoria.component.html',
    styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {

    categorias: Categoria[];

    constructor(private service: CategoriaService, private router: Router) {
        this.categorias = new Array();
    }

    ngOnInit(): void {
        this.service.getCategorias('newUser')
            .subscribe(data => {
                this.categorias = data;
            });
    }

    add() {
        this.router.navigate(['addCategoria']);
    }

    editar(categoria: Categoria) {
        localStorage.setItem('idCat', categoria.id.toString());
        this.router.navigate(['editCategoria']);
    }

    delete(categoria: Categoria) {
        this.service.delete(categoria.id.toString())
            .subscribe(data => {
                this.categorias = this.categorias.filter(c => c != categoria);
                alert('Categoria eliminada');
            });
    }

}
