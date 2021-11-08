import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seguidor } from '../model/seguidor';

@Injectable({
  providedIn: 'root'
})
export class SeguidorService {
  
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/backend/seguidor';
  
  addSeguidor(seguidor:Seguidor){
    
    return this.http.post<Seguidor>(`${this.url}/add2`, seguidor);
  }
  getUsernameByIdSeguidor(idSeguidor:String){
    
    return this.http.get<String[]>(`${this.url}/seguidopor/${idSeguidor}`);
  } 
}
