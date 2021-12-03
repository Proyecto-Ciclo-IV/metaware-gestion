import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { AvanceListRelationFilter } from "../inputs/AvanceListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumEnum_EstadoUsuarioFilter } from "../inputs/EnumEnum_EstadoUsuarioFilter";
import { EnumEnum_RolFilter } from "../inputs/EnumEnum_RolFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { ProyectoListRelationFilter } from "../inputs/ProyectoListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UsuarioWhereInput {
    AND?: UsuarioWhereInput[] | undefined;
    OR?: UsuarioWhereInput[] | undefined;
    NOT?: UsuarioWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    correo?: StringNullableFilter | undefined;
    correoVerificado?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    telefono?: StringNullableFilter | undefined;
    rol?: EnumEnum_RolFilter | undefined;
    estado?: EnumEnum_EstadoUsuarioFilter | undefined;
    proyectosLiderados?: ProyectoListRelationFilter | undefined;
    avancesCreados?: AvanceListRelationFilter | undefined;
    inscripciones?: InscripcionListRelationFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
}
