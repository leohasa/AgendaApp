import { Categoria } from "./categoria";
import { Proyecto } from "./proyecto";
import { Usuario } from "./usuario";

export class Actividad {

    id: string;
    proyecto: Proyecto;
    categoria: Categoria;
    fechaInicio: string;
    fechaFin: string;
    titulo: string;
    descripcion: String;
    estado: string = '1';
    usuario:Usuario;

    constructor() {
        this.proyecto = new Proyecto();
        this.categoria = new Categoria();
        this.usuario = new Usuario();
    }

}
