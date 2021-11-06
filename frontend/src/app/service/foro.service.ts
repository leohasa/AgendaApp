import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicacion } from '../model/publicacion';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/backend/foro';

  getPublicaciones(username: string) {
    return this.http.get<Publicacion[]>(`${this.url}/publicacion/${username}`);
  }

  createPublicacion(publicacion: Publicacion) {
    return this.http.post<Publicacion>(`${this.url}/add`, publicacion);
  }

  editPublicacion(publicacion: Publicacion) {

    return this.http.put<Publicacion>(`${this.url}/update`, publicacion);
  }
  delete(publicacion: Publicacion) {

    return this.http.delete<Publicacion>(`${this.url}/delete/${publicacion.id}`);
  }
}
