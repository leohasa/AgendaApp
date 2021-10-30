import { Element } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Editor } from 'ngx-editor';


@Component({
  selector: 'app-txt-edit',
  templateUrl: './txt-edit.component.html',
  styleUrls: ['./txt-edit.component.css']
})
export class TxtEditComponent implements OnInit {

  editor: Editor;
  html : '';
  
  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
    this.html = '';
    
  }
  onSave(): void{
    console.log(this.html)
    this.html = '';
  }
  onSubmit():void{
    //const html = toHTML(jsonDoc, this.editor.schema);
    
    
    
    
    const el = document.createElement('div');
    el.innerHTML = this.html
    console.log(this.html)
    const textContent = el.textContent
    console.log("texto : "+ textContent);
   
    
  }

}
