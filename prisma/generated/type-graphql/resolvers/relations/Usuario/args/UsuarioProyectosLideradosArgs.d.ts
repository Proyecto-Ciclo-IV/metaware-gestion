import { ProyectoOrderByWithRelationInput } from "../../../inputs/ProyectoOrderByWithRelationInput";
import { ProyectoWhereInput } from "../../../inputs/ProyectoWhereInput";
import { ProyectoWhereUniqueInput } from "../../../inputs/ProyectoWhereUniqueInput";
export declare class UsuarioProyectosLideradosArgs {
    where?: ProyectoWhereInput | undefined;
    orderBy?: ProyectoOrderByWithRelationInput[] | undefined;
    cursor?: ProyectoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "nombre" | "descripcion" | "presupuesto" | "fechaInicio" | "fechaFin" | "userId" | "estado" | "fase"> | undefined;
}