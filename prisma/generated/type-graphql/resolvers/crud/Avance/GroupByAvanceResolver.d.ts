import { GraphQLResolveInfo } from "graphql";
import { GroupByAvanceArgs } from "./args/GroupByAvanceArgs";
import { AvanceGroupBy } from "../../outputs/AvanceGroupBy";
export declare class GroupByAvanceResolver {
    groupByAvance(ctx: any, info: GraphQLResolveInfo, args: GroupByAvanceArgs): Promise<AvanceGroupBy[]>;
}
