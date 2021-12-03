import { Proyecto } from "../models/Proyecto";
import { Usuario } from "../models/Usuario";
export declare class Inscripcion {
    id: string;
    estado: "Aceptada" | "Rechazada";
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto?: Proyecto;
    proyectoId: string;
    estudiante?: Usuario;
    userId: string;
}
