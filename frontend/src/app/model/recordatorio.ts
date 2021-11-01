import { Usuario } from "./usuario";

export class Recordatorio {

    id:string;
    titulo:string;
    descripcion:string = "";
    fecha:string = ""; 
    estado:number = 0;
    usuario:Usuario;

    constructor(){
        this.usuario = new Usuario();
    }
    
}