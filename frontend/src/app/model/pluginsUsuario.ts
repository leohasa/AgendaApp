import { Plugin } from "./plugin";
import { Usuario } from "./usuario";

export class PluginsUsuario {
    id: string;
    usuario: Usuario;
    plugin: Plugin;

    constructor() {
        this.usuario = new Usuario();
        this.plugin = new Plugin();
    }
}
