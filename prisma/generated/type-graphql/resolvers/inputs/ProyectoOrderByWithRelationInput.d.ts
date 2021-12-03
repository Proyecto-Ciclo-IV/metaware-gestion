import { AvanceOrderByRelationAggregateInput } from "../inputs/AvanceOrderByRelationAggregateInput";
import { InscripcionOrderByRelationAggregateInput } from "../inputs/InscripcionOrderByRelationAggregateInput";
import { ObjetivoOrderByRelationAggregateInput } from "../inputs/ObjetivoOrderByRelationAggregateInput";
import { UsuarioOrderByWithRelationInput } from "../inputs/UsuarioOrderByWithRelationInput";
export declare class ProyectoOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    descripcion?: "asc" | "desc" | undefined;
    presupuesto?: "asc" | "desc" | undefined;
    fechaInicio?: "asc" | "desc" | undefined;
    fechaFin?: "asc" | "desc" | undefined;
    lider?: UsuarioOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    fase?: "asc" | "desc" | undefined;
    objetivos?: ObjetivoOrderByRelationAggregateInput | undefined;
    avances?: AvanceOrderByRelationAggregateInput | undefined;
    inscripciones?: InscripcionOrderByRelationAggregateInput | undefined;
}
