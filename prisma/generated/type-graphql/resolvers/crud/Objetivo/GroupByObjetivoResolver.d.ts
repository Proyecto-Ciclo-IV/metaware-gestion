import { GraphQLResolveInfo } from "graphql";
import { GroupByObjetivoArgs } from "./args/GroupByObjetivoArgs";
import { ObjetivoGroupBy } from "../../outputs/ObjetivoGroupBy";
export declare class GroupByObjetivoResolver {
    groupByObjetivo(ctx: any, info: GraphQLResolveInfo, args: GroupByObjetivoArgs): Promise<ObjetivoGroupBy[]>;
}
