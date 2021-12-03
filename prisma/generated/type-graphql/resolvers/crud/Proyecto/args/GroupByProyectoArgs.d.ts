import { ProyectoOrderByWithAggregationInput } from "../../../inputs/ProyectoOrderByWithAggregationInput";
import { ProyectoScalarWhereWithAggregatesInput } from "../../../inputs/ProyectoScalarWhereWithAggregatesInput";
import { ProyectoWhereInput } from "../../../inputs/ProyectoWhereInput";
export declare class GroupByProyectoArgs {
    where?: ProyectoWhereInput | undefined;
    orderBy?: ProyectoOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "nombre" | "descripcion" | "presupuesto" | "fechaInicio" | "fechaFin" | "userId" | "estado" | "fase">;
    having?: ProyectoScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
