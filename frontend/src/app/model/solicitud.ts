import { Usuario } from "./usuario";

export class Solicitud {

    id: String;
    usuario: Usuario;
    contenido: String;

    constructor() {
        this.usuario = new Usuario();
    }
}
