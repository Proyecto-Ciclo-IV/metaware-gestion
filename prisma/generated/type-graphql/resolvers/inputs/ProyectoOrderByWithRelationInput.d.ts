import { AvanceOrderByRelationAggregateInput } from "../inputs/AvanceOrderByRelationAggregateInput";
import { InscripcionOrderByRelationAggregateInput } from "../inputs/InscripcionOrderByRelationAggregateInput";
import { ObjetivoOrderByRelationAggregateInput } from "../inputs/ObjetivoOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ProyectoOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    descripcion?: "asc" | "desc" | undefined;
    presupuesto?: "asc" | "desc" | undefined;
    fechaInicio?: "asc" | "desc" | undefined;
    fechaFin?: "asc" | "desc" | undefined;
    lider?: UserOrderByWithRelationInput | undefined;
    UserId?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    fase?: "asc" | "desc" | undefined;
    objetivos?: ObjetivoOrderByRelationAggregateInput | undefined;
    avances?: AvanceOrderByRelationAggregateInput | undefined;
    inscripciones?: InscripcionOrderByRelationAggregateInput | undefined;
}
