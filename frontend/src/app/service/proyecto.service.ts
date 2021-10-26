import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';

@Injectable({
    providedIn: 'root'
})
export class ProyectoService {

    private url: String = 'http://localhost:3000/backend/proyecto';

    constructor(private http: HttpClient) { }

    get(username: String) {
        return this.http.get<Proyecto[]>(`${this.url}/list/${username}`);
    }

    create(proyecto: Proyecto) {
        return this.http.post<Proyecto>(`${this.url}/add`, proyecto);
    }

    getById(id: String) {
        return this.http.get<Proyecto>(`${this.url}/get/${id}`);
    }

    update(proyecto: Proyecto) {
        return this.http.put<Proyecto>(`${this.url}/update`, proyecto);
    }

    delete(id: String) {
        return this.http.delete(`${this.url}/delete/${id}`);
    }
}
