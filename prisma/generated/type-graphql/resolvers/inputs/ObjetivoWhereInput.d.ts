import { EnumEnum_TipoObjetivoFilter } from "../inputs/EnumEnum_TipoObjetivoFilter";
import { ProyectoRelationFilter } from "../inputs/ProyectoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ObjetivoWhereInput {
    AND?: ObjetivoWhereInput[] | undefined;
    OR?: ObjetivoWhereInput[] | undefined;
    NOT?: ObjetivoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    descripcion?: StringFilter | undefined;
    tipo?: EnumEnum_TipoObjetivoFilter | undefined;
    proyecto?: ProyectoRelationFilter | undefined;
    proyectoId?: StringFilter | undefined;
}
