import { Categoria } from "./categoria";
import { Proyecto } from "./proyecto";

export class Actividad {

    id: String;
    proyecto: Proyecto;
    categoria: Categoria;
    fechaInicio: string;
    fechaFin: string;
    titulo: String;
    descripcion: String;
    estado: String;

    constructor() {
        this.proyecto = new Proyecto();
        this.categoria = new Categoria();
    }

}
