import { ProyectoOrderByWithRelationInput } from "../inputs/ProyectoOrderByWithRelationInput";
export declare class ObjetivoOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    descripcion?: "asc" | "desc" | undefined;
    tipo?: "asc" | "desc" | undefined;
    proyecto?: ProyectoOrderByWithRelationInput | undefined;
    proyectoId?: "asc" | "desc" | undefined;
}
