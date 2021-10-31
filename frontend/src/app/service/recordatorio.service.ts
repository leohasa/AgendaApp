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
    return this.http.post<Recordatorio>(`${this.url}/add`, recordatorio);
  }
}
