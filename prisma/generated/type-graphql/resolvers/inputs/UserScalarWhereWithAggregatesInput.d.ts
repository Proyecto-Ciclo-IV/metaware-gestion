import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { EnumEnum_EstadoUserWithAggregatesFilter } from "../inputs/EnumEnum_EstadoUserWithAggregatesFilter";
import { EnumEnum_RolWithAggregatesFilter } from "../inputs/EnumEnum_RolWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    emailVerified?: DateTimeNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    telefono?: StringNullableWithAggregatesFilter | undefined;
    rol?: EnumEnum_RolWithAggregatesFilter | undefined;
    estado?: EnumEnum_EstadoUserWithAggregatesFilter | undefined;
}
