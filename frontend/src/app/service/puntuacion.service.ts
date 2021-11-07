import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Puntuacion } from '../model/puntuacion';

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {

  constructor(private http :HttpClient) { }
  url = 'http://localhost:3000/backend/puntuacion';
  //exist
  existPuntuacionByUserAndPublicacion(username:String, idPublicacion: string){
    
    console.log("username", username);
    return this.http.get<Boolean>(`${this.url}/exist/${username}/${idPublicacion}`);
    
  }
  getPuntuacionByUserAndPublicacion(username:String, idPublicacion: string){
    return this.http.get<Puntuacion>(`${this.url}/usrpublicacion/${username}/${idPublicacion}`);
  }
  create(puntuacion:Puntuacion){
    return this.http.post<Puntuacion>(`${this.url}/add`,puntuacion);
  }
  edit(puntuacion:Puntuacion){
    return this.http.put<Puntuacion>(`${this.url}/update`,puntuacion); 
  }
  
}
