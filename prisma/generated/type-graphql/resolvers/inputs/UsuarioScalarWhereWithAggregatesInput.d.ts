import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { EnumEnum_EstadoUsuarioWithAggregatesFilter } from "../inputs/EnumEnum_EstadoUsuarioWithAggregatesFilter";
import { EnumEnum_RolWithAggregatesFilter } from "../inputs/EnumEnum_RolWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UsuarioScalarWhereWithAggregatesInput {
    AND?: UsuarioScalarWhereWithAggregatesInput[] | undefined;
    OR?: UsuarioScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UsuarioScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    correo?: StringNullableWithAggregatesFilter | undefined;
    correoVerificado?: DateTimeNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    telefono?: StringNullableWithAggregatesFilter | undefined;
    rol?: EnumEnum_RolWithAggregatesFilter | undefined;
    estado?: EnumEnum_EstadoUsuarioWithAggregatesFilter | undefined;
}
