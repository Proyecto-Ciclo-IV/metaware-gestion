import { NestedEnumEnum_EstadoInscripcionFilter } from "../inputs/NestedEnumEnum_EstadoInscripcionFilter";
import { NestedEnumEnum_EstadoInscripcionWithAggregatesFilter } from "../inputs/NestedEnumEnum_EstadoInscripcionWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_EstadoInscripcionWithAggregatesFilter {
    equals?: "Aceptada" | "Rechazada" | undefined;
    in?: Array<"Aceptada" | "Rechazada"> | undefined;
    notIn?: Array<"Aceptada" | "Rechazada"> | undefined;
    not?: NestedEnumEnum_EstadoInscripcionWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_EstadoInscripcionFilter | undefined;
    _max?: NestedEnumEnum_EstadoInscripcionFilter | undefined;
}
