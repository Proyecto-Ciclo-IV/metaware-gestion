import { Proyecto } from "../models/Proyecto";
import { User } from "../models/User";
export declare class Inscripcion {
    id: string;
    estado: "Aceptada" | "Rechazada";
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto?: Proyecto;
    proyectoId: string;
    estudiante?: User;
    UserId: string;
}
