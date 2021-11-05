import { Usuario } from "./usuario";

export class Notificacion {
    
    id:number;
    titulo:string;
    descripcion:string = "";
    fecha:string = ""; 
    usuario:Usuario;

    constructor(){
        this.usuario = new Usuario();
    }

}