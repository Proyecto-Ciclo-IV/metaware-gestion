import { Avance } from "../models/Avance";
import { Inscripcion } from "../models/Inscripcion";
import { Objetivo } from "../models/Objetivo";
import { Usuario } from "../models/Usuario";
import { ProyectoCount } from "../resolvers/outputs/ProyectoCount";
export declare class Proyecto {
    id: string;
    nombre: string;
    descripcion: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    lider?: Usuario;
    userId: string;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarrollo" | "Terminado";
    objetivos?: Objetivo[];
    avances?: Avance[];
    inscripciones?: Inscripcion[];
    _count: ProyectoCount;
}
