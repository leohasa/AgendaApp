import { Usuario } from "./usuario";


export class Publicacion {
    
    usuario : Usuario;  
    constructor (){
        this.usuario = new Usuario();
    }

    id: string;
    titulo: string;
    contenido: string;//verificar si hay un tipo con mas grande
    fechaPublicacion: string;
    puntuacion:string;    

}
