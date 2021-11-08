import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solicitud } from '../model/solicitud';

@Injectable({
    providedIn: 'root'
})
export class SolicitudService {

    constructor(private http: HttpClient) { }

    url = 'http://localhost:3000/backend/solicitud';

    get() {
        return this.http.get<Solicitud[]>(`${this.url}/solicitudes`);
    }

    listByEstado(estado: string) {
        return this.http.get<Solicitud[]>(`${this.url}/listByEstado/${estado}`);
    }

    getById(id: string) {
        return this.http.get<Solicitud>(`${this.url}/get/${id}`);
    }

    addSolicitud(solicitud: Solicitud) {
        return this.http.post<Solicitud>(`${this.url}/addSolicitud`, solicitud);
    }

    newEditor(id: String) {
        return this.http.get<Solicitud>(`${this.url}/newEditor/${id}`);
    }

    rechazar(id: String) {
        return this.http.get<Solicitud>(`${this.url}/rechazar/${id}`);
    }

    existsByUser(username: string) {
        return this.http.get<boolean>(`${this.url}/existsByUser/${username}`);
    }
}
