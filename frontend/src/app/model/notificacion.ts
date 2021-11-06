import { Usuario } from "./usuario";

export class Notificacion {
    
    id:number;
    titulo:string;
    descripcion:string = "";
    fechaHora:string = ""; 
    usuario:Usuario;

    constructor(){
        this.usuario = new Usuario();
    }

}