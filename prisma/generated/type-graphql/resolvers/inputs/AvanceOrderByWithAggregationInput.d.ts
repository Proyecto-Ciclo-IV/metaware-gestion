import { AvanceCountOrderByAggregateInput } from "../inputs/AvanceCountOrderByAggregateInput";
import { AvanceMaxOrderByAggregateInput } from "../inputs/AvanceMaxOrderByAggregateInput";
import { AvanceMinOrderByAggregateInput } from "../inputs/AvanceMinOrderByAggregateInput";
export declare class AvanceOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    fecha?: "asc" | "desc" | undefined;
    descripcion?: "asc" | "desc" | undefined;
    observaciones?: "asc" | "desc" | undefined;
    proyectoId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: AvanceCountOrderByAggregateInput | undefined;
    _max?: AvanceMaxOrderByAggregateInput | undefined;
    _min?: AvanceMinOrderByAggregateInput | undefined;
}
