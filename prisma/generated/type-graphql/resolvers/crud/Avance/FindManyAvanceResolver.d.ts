import { GraphQLResolveInfo } from "graphql";
import { FindManyAvanceArgs } from "./args/FindManyAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class FindManyAvanceResolver {
    avances(ctx: any, info: GraphQLResolveInfo, args: FindManyAvanceArgs): Promise<Avance[]>;
}
