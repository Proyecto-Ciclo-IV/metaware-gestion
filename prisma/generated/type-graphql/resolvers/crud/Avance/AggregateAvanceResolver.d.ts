import { GraphQLResolveInfo } from "graphql";
import { AggregateAvanceArgs } from "./args/AggregateAvanceArgs";
import { AggregateAvance } from "../../outputs/AggregateAvance";
export declare class AggregateAvanceResolver {
    aggregateAvance(ctx: any, info: GraphQLResolveInfo, args: AggregateAvanceArgs): Promise<AggregateAvance>;
}
