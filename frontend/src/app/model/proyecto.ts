import { Usuario } from "./usuario";

export class Proyecto {

    id: String;
    nombre: String;
    descripcion: String;
    fechaInicio: String;
    fechaPrevistaFin: String;
    ubicacion: String;
    visibilidad: String;
    usuario: Usuario;

    constructor() {
        this.usuario = new Usuario();
    }

}
