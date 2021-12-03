import { GraphQLResolveInfo } from "graphql";
import { AggregateObjetivoArgs } from "./args/AggregateObjetivoArgs";
import { AggregateObjetivo } from "../../outputs/AggregateObjetivo";
export declare class AggregateObjetivoResolver {
    aggregateObjetivo(ctx: any, info: GraphQLResolveInfo, args: AggregateObjetivoArgs): Promise<AggregateObjetivo>;
}
