import { ObjetivoOrderByWithAggregationInput } from "../../../inputs/ObjetivoOrderByWithAggregationInput";
import { ObjetivoScalarWhereWithAggregatesInput } from "../../../inputs/ObjetivoScalarWhereWithAggregatesInput";
import { ObjetivoWhereInput } from "../../../inputs/ObjetivoWhereInput";
export declare class GroupByObjetivoArgs {
    where?: ObjetivoWhereInput | undefined;
    orderBy?: ObjetivoOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "descripcion" | "tipo" | "proyectoId">;
    having?: ObjetivoScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
