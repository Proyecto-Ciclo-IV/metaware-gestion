import { AvanceListRelationFilter } from "../inputs/AvanceListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_EstadoProyectoFilter } from "../inputs/EnumEnum_EstadoProyectoFilter";
import { EnumEnum_FaseProyectoFilter } from "../inputs/EnumEnum_FaseProyectoFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { ObjetivoListRelationFilter } from "../inputs/ObjetivoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";
export declare class ProyectoWhereInput {
    AND?: ProyectoWhereInput[] | undefined;
    OR?: ProyectoWhereInput[] | undefined;
    NOT?: ProyectoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    descripcion?: StringFilter | undefined;
    presupuesto?: FloatFilter | undefined;
    fechaInicio?: DateTimeFilter | undefined;
    fechaFin?: DateTimeFilter | undefined;
    lider?: UsuarioRelationFilter | undefined;
    userId?: StringFilter | undefined;
    estado?: EnumEnum_EstadoProyectoFilter | undefined;
    fase?: EnumEnum_FaseProyectoFilter | undefined;
    objetivos?: ObjetivoListRelationFilter | undefined;
    avances?: AvanceListRelationFilter | undefined;
    inscripciones?: InscripcionListRelationFilter | undefined;
}
