import { Usuario } from "./usuario";

export class Solicitud {

    id: String;
    usuario: Usuario;
    contenido: String;
    estado: string;

    constructor() {
        this.usuario = new Usuario();
    }
}
