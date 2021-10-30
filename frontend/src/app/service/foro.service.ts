import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicacion } from '../model/publicacion';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  constructor(private http: HttpClient) { }
  
  url = 'http://localhost:3000/backend/foro';
  
  getPublicaciones(){
    return this.http.get<Publicacion[]>(`${this.url}/list`);
  }
  
  createPublicacion(publicacion : Publicacion){
    return this.http.post<Publicacion>(`${this.url}/add`, publicacion);
  }
  
}
