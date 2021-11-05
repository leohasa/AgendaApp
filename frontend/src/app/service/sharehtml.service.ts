import { EventEmitter, Injectable, Output } from '@angular/core';
import { Publicacion } from '../model/publicacion';

@Injectable({
  providedIn: 'root'
})
export class SharehtmlService {

  @Output() data : EventEmitter<any> = new EventEmitter<any>();
  @Output() expression : EventEmitter<string>  = new EventEmitter<string>();
  @Output() message : EventEmitter<string>  = new EventEmitter<string>();
  @Output() update : EventEmitter<Boolean>  = new EventEmitter<Boolean>();
  @Output() txtHead : EventEmitter<string>  = new EventEmitter<string>();
  @Output() aumentar : EventEmitter<Publicacion>  = new EventEmitter<Publicacion>();
  constructor() { }
  
}
