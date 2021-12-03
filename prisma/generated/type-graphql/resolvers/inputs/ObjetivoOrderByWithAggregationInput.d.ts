import { ObjetivoCountOrderByAggregateInput } from "../inputs/ObjetivoCountOrderByAggregateInput";
import { ObjetivoMaxOrderByAggregateInput } from "../inputs/ObjetivoMaxOrderByAggregateInput";
import { ObjetivoMinOrderByAggregateInput } from "../inputs/ObjetivoMinOrderByAggregateInput";
export declare class ObjetivoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    descripcion?: "asc" | "desc" | undefined;
    tipo?: "asc" | "desc" | undefined;
    proyectoId?: "asc" | "desc" | undefined;
    _count?: ObjetivoCountOrderByAggregateInput | undefined;
    _max?: ObjetivoMaxOrderByAggregateInput | undefined;
    _min?: ObjetivoMinOrderByAggregateInput | undefined;
}
