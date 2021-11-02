import { Categoria } from "./categoria";
import { Proyecto } from "./proyecto";
import { Usuario } from "./usuario";

export class Actividad {

    id: String;
    proyecto: Proyecto;
    categoria: Categoria;
    fechaInicio: String;
    fechaFin: String;
    titulo: String;
    descripcion: String;
    estado: String = '1';
    usuario:Usuario;

    constructor() {
        this.proyecto = new Proyecto();
        this.categoria = new Categoria();
        this.usuario = new Usuario();
    }

}
