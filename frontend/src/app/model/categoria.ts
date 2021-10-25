import { Usuario } from "./usuario";

export class Categoria {

    id: Number;
    nombre: String;
    usuario: Usuario;

    constructor() {
        this.usuario = new Usuario();
    }

}
