import { NestedEnumEnum_TipoObjetivoFilter } from "../inputs/NestedEnumEnum_TipoObjetivoFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumEnum_TipoObjetivoWithAggregatesFilter {
    equals?: "General" | "Especifico" | undefined;
    in?: Array<"General" | "Especifico"> | undefined;
    notIn?: Array<"General" | "Especifico"> | undefined;
    not?: NestedEnumEnum_TipoObjetivoWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_TipoObjetivoFilter | undefined;
    _max?: NestedEnumEnum_TipoObjetivoFilter | undefined;
}
