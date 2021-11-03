import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plugin } from '../model/plugin';

@Injectable({
    providedIn: 'root'
})
export class PluginService {

    private url: string = 'http://localhost:3000/backend/plugin';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Plugin[]>(`${this.url}/list`);
    }

    create(plugin: Plugin) {
        return this.http.post<Plugin>(`${this.url}/add`, plugin);
    }

    getById(id: string) {
        return this.http.get<Plugin>(`${this.url}/get/${id}`);
    }

    update(plugin: Plugin) {
        return this.http.put<Plugin>(`${this.url}/update`, plugin);
    }

    delete(id: string) {
        return this.http.delete<Plugin>(`${this.url}/delete/${id}`);
    }
}
