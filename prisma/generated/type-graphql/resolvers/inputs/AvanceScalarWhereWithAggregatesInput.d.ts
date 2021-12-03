import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AvanceScalarWhereWithAggregatesInput {
    AND?: AvanceScalarWhereWithAggregatesInput[] | undefined;
    OR?: AvanceScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AvanceScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    fecha?: DateTimeWithAggregatesFilter | undefined;
    descripcion?: StringWithAggregatesFilter | undefined;
    observaciones?: StringWithAggregatesFilter | undefined;
    proyectoId?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}
