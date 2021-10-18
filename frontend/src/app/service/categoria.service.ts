import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    private url: String = 'http://localhost:3000/backend/categoria';

    constructor(private http: HttpClient) { }

    getCategorias(username: String) {
        return this.http.get<Categoria[]>(`${this.url}/list/${username}`);
    }

    createCategoria(categoria: Categoria) {
        return this.http.post<Categoria>(`${this.url}/add`, categoria);
    }

    getCategoriaById(id: String) {
        return this.http.get<Categoria>(`${this.url}/get/${id}`);
    }

    updateUsuario(categoria: Categoria) {
        return this.http.put<Categoria>(`${this.url}/update`, categoria);
    }

    delete(id: String) {
        return this.http.delete<Categoria>(`${this.url}/delete/${id}`);
    }
}
