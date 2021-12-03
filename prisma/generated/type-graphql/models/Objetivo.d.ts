import { Proyecto } from "../models/Proyecto";
export declare class Objetivo {
    id: string;
    descripcion: string;
    tipo: "General" | "Especifico";
    proyecto?: Proyecto;
    proyectoId: string;
}
