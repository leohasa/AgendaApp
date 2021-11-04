import { Publicacion } from "./publicacion";
import { Usuario } from "./usuario";


export class Comentario {
    
    usuario : Usuario; 
    publicacion:Publicacion;
    
    constructor (){
        this.usuario = new Usuario();
        this.publicacion = new Publicacion();        
    }
    
    
    id: string;
    contenido: string;//verificar si hay un tipo con mas grande
    fecha: string;
    

}
