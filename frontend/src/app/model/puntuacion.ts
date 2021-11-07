import { Publicacion } from "./publicacion";
import { Usuario } from "./usuario";


export class Puntuacion {
    
    usuario : Usuario;
    publicacion :  Publicacion;
    constructor (){
        this.usuario = new Usuario();
        this.publicacion=new Publicacion();
    }
    
    id:string;
    punto:string;
    

}
