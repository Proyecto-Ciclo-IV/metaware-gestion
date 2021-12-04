import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_EstadoProyectoWithAggregatesFilter } from "../inputs/EnumEnum_EstadoProyectoWithAggregatesFilter";
import { EnumEnum_FaseProyectoWithAggregatesFilter } from "../inputs/EnumEnum_FaseProyectoWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProyectoScalarWhereWithAggregatesInput {
    AND?: ProyectoScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProyectoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProyectoScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    nombre?: StringWithAggregatesFilter | undefined;
    descripcion?: StringWithAggregatesFilter | undefined;
    presupuesto?: FloatWithAggregatesFilter | undefined;
    fechaInicio?: DateTimeWithAggregatesFilter | undefined;
    fechaFin?: DateTimeWithAggregatesFilter | undefined;
    UserId?: StringWithAggregatesFilter | undefined;
    estado?: EnumEnum_EstadoProyectoWithAggregatesFilter | undefined;
    fase?: EnumEnum_FaseProyectoWithAggregatesFilter | undefined;
}
