import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_EstadoInscripcionWithAggregatesFilter } from "../inputs/EnumEnum_EstadoInscripcionWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InscripcionScalarWhereWithAggregatesInput {
    AND?: InscripcionScalarWhereWithAggregatesInput[] | undefined;
    OR?: InscripcionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InscripcionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    estado?: EnumEnum_EstadoInscripcionWithAggregatesFilter | undefined;
    fechaIngreso?: DateTimeWithAggregatesFilter | undefined;
    fechaEgreso?: DateTimeWithAggregatesFilter | undefined;
    proyectoId?: StringWithAggregatesFilter | undefined;
    UserId?: StringWithAggregatesFilter | undefined;
}
