import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recordatorio } from '../model/recordatorio';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  private url: String = 'http://localhost:3000/backend/recordatorio';

  constructor(private http: HttpClient) { }

  create(recordatorio: Recordatorio) {
    return this.http.post(`${this.url}/add`, recordatorio);
  }

  getRecordatorios(idUsuario:string){
    return this.http.post<Array<Recordatorio>>(`${this.url}/get`, idUsuario);
  }

  /*
  getRecordatoriosPorFecha(idUsuario:string){
    return this.http.post<Array<Recordatorio>>(`${this.url}/getPorFecha`, idUsuario);
  }
  */

  delete(idRecordatorio:number) {
    return this.http.post(`${this.url}/delete`,idRecordatorio);
  }
}
