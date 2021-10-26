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
    textInfo:string = "";

    constructor(private service: CategoriaService, private router: Router) {
        this.categorias = new Array();
    }

    ngOnInit(): void {
        let user: String = sessionStorage.getItem('user') ?? '';
        this.service.getCategorias(user)
            .subscribe(data => {
                this.categorias = data;
            });
    }

    add() {
        this.router.navigate(['/categoria/add']);
    }

    editar(categoria: Categoria) {
        localStorage.setItem('idCat', categoria.id.toString());
        this.router.navigate(['/categoria/edit']);
    }

    delete(categoria: Categoria) {
        this.service.delete(categoria.id.toString())
            .subscribe(data => {
                this.categorias = this.categorias.filter(c => c != categoria);
                this.showInfo('Categoria eliminada');
            });
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

}
