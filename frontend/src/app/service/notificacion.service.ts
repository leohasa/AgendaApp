import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private bandera:Subject<boolean>;

  constructor() {
    this.bandera = new Subject<boolean>();
  }

  getUpdateNotificaciones():Observable<boolean>{
    return this.bandera;
  }

  updateNotificaciones(bandera:boolean){
    this.bandera.next(bandera);
  }

}
