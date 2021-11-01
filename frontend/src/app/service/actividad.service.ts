import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actividad } from '../model/actividad';

@Injectable({
    providedIn: 'root'
})
export class ActividadService {

    private url: String = 'http://localhost:3000/backend/actividad';

    constructor(private http: HttpClient) { }

    get(idProyecto: String) {
        return this.http.get<Actividad[]>(`${this.url}/list/${idProyecto}`);
    }

    create(actividad: Actividad) {
        return this.http.post<Actividad>(`${this.url}/add`, actividad);
    }

    getById(id: String) {
        return this.http.get<Actividad>(`${this.url}/get/${id}`);
    }

    update(actividad: Actividad) {
        return this.http.put<Actividad>(`${this.url}/update`, actividad);
    }

    delete(id: String) {
        return this.http.delete<Actividad>(`${this.url}/delete/${id}`);
    }

    getByUser(username: String) {
        return this.http.get<Actividad[]>(`${this.url}/listByUser/${username}`);
    }
}
