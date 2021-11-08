import { Usuario } from "./usuario";

export class Seguidor {

    id: String;
    usuario: Usuario;//seguido
    seguidor:Usuario;//seguidor
    

    constructor() {
        this.usuario = new Usuario();
        this.seguidor = new Usuario();
    }
}
