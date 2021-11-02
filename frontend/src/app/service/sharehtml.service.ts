import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharehtmlService {

  @Output() data : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  
}
