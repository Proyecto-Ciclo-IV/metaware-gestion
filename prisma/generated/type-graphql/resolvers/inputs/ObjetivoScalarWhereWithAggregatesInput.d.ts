import { EnumEnum_TipoObjetivoWithAggregatesFilter } from "../inputs/EnumEnum_TipoObjetivoWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ObjetivoScalarWhereWithAggregatesInput {
    AND?: ObjetivoScalarWhereWithAggregatesInput[] | undefined;
    OR?: ObjetivoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ObjetivoScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    descripcion?: StringWithAggregatesFilter | undefined;
    tipo?: EnumEnum_TipoObjetivoWithAggregatesFilter | undefined;
    proyectoId?: StringWithAggregatesFilter | undefined;
}
