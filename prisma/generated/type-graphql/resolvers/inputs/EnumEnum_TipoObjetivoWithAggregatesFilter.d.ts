import { NestedEnumEnum_TipoObjetivoFilter } from "../inputs/NestedEnumEnum_TipoObjetivoFilter";
import { NestedEnumEnum_TipoObjetivoWithAggregatesFilter } from "../inputs/NestedEnumEnum_TipoObjetivoWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_TipoObjetivoWithAggregatesFilter {
    equals?: "General" | "Especifico" | undefined;
    in?: Array<"General" | "Especifico"> | undefined;
    notIn?: Array<"General" | "Especifico"> | undefined;
    not?: NestedEnumEnum_TipoObjetivoWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_TipoObjetivoFilter | undefined;
    _max?: NestedEnumEnum_TipoObjetivoFilter | undefined;
}
