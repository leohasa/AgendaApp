import { Usuario } from "./usuario";

export class Rol {
    id: String;
    tipo: String;
    usuario: Usuario;

    constructor() {
        this.usuario = new Usuario();
    }
}
