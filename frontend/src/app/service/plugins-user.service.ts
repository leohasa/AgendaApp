import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PluginsUsuario } from '../model/pluginsUsuario';

@Injectable({
    providedIn: 'root'
})
export class PluginsUserService {

    private url: string = 'http://localhost:3000/backend/plugins';

    constructor(private http: HttpClient) { }

    getAllByUser(username: string) {
        return this.http.get<PluginsUsuario[]>(`${this.url}/list/${username}`);
    }

    create(plugins: PluginsUsuario) {
        return this.http.post<PluginsUsuario>(`${this.url}/add`, plugins);
    }

    getById(id: string) {
        return this.http.get<PluginsUsuario>(`${this.url}/get/${id}`);
    }

    update(plugins: PluginsUsuario) {
        return this.http.put<PluginsUsuario>(`${this.url}/update`, plugins);
    }

    delete(id: string) {
        return this.http.delete<PluginsUsuario>(`${this.url}/delete/${id}`);
    }

}
