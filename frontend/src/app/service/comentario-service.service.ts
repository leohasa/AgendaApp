import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../model/comentario';
import { Publicacion } from '../model/publicacion';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioServiceService {

  constructor(private http: HttpClient) { }
  
  url =   'http://localhost:3000/backend/comentario';
  
  getPublicacionByPublicacionAndUser(publicacion:string){
     return this.http.get<Comentario[]>(`${this.url}/comentarios/${publicacion}`);
  }
  add(comentario:Comentario){
    return this.http.post<Comentario[]>(`${this.url}/add/`,comentario);
 }
  deleteByIdPublicacion( id:string){
    return this.http.delete<Comentario>(`${this.url}/delete/publicacion/${id}`);
  }
}
