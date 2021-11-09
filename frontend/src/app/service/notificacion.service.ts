import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notificacion } from '../model/notificacion';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private url:string = 'http://localhost:3000/backend/notificacion';
  private bandera:Subject<boolean>;

  constructor(private http:HttpClient) {
    this.bandera = new Subject<boolean>();
  }

  deleteNotificaciones(usuario:string){
    return this.http.post(this.url+'/removeAll',usuario);
  }

  create(notificacion:Notificacion){
    return this.http.post(this.url+'/add',notificacion);
  }

  getNotificacionesPorFecha(idUsuario:string){
    return this.http.post<Array<Notificacion>>(`${this.url}/getPorFechaHora`, idUsuario);
  }

  getUpdateNotificaciones():Observable<boolean>{
    return this.bandera;
  }

  updateNotificaciones(bandera:boolean){
    this.bandera.next(bandera);
  }

}
