import { Proyecto } from "../models/Proyecto";
import { User } from "../models/User";
export declare class Avance {
    id: string;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    proyecto?: Proyecto;
    proyectoId: string;
    creadoPor?: User;
    UserId: string;
}
