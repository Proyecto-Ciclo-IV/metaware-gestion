import { EnumEnum_TipoObjetivoFilter } from "../inputs/EnumEnum_TipoObjetivoFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ObjetivoScalarWhereInput {
    AND?: ObjetivoScalarWhereInput[] | undefined;
    OR?: ObjetivoScalarWhereInput[] | undefined;
    NOT?: ObjetivoScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    descripcion?: StringFilter | undefined;
    tipo?: EnumEnum_TipoObjetivoFilter | undefined;
    proyectoId?: StringFilter | undefined;
}
