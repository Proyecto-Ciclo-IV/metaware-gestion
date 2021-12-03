import { AvanceOrderByWithAggregationInput } from "../../../inputs/AvanceOrderByWithAggregationInput";
import { AvanceScalarWhereWithAggregatesInput } from "../../../inputs/AvanceScalarWhereWithAggregatesInput";
import { AvanceWhereInput } from "../../../inputs/AvanceWhereInput";
export declare class GroupByAvanceArgs {
    where?: AvanceWhereInput | undefined;
    orderBy?: AvanceOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "fecha" | "descripcion" | "observaciones" | "proyectoId" | "userId">;
    having?: AvanceScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
