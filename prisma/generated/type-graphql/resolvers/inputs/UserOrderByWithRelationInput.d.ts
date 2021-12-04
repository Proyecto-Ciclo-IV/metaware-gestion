import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { AvanceOrderByRelationAggregateInput } from "../inputs/AvanceOrderByRelationAggregateInput";
import { InscripcionOrderByRelationAggregateInput } from "../inputs/InscripcionOrderByRelationAggregateInput";
import { ProyectoOrderByRelationAggregateInput } from "../inputs/ProyectoOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    telefono?: "asc" | "desc" | undefined;
    rol?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    proyectosLiderados?: ProyectoOrderByRelationAggregateInput | undefined;
    avancesCreados?: AvanceOrderByRelationAggregateInput | undefined;
    inscripciones?: InscripcionOrderByRelationAggregateInput | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
}
