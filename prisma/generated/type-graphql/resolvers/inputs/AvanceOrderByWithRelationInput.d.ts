import { ProyectoOrderByWithRelationInput } from "../inputs/ProyectoOrderByWithRelationInput";
import { UsuarioOrderByWithRelationInput } from "../inputs/UsuarioOrderByWithRelationInput";
export declare class AvanceOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    fecha?: "asc" | "desc" | undefined;
    descripcion?: "asc" | "desc" | undefined;
    observaciones?: "asc" | "desc" | undefined;
    proyecto?: ProyectoOrderByWithRelationInput | undefined;
    proyectoId?: "asc" | "desc" | undefined;
    creadoPor?: UsuarioOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
}
