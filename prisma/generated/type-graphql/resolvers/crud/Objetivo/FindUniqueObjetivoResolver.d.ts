import { GraphQLResolveInfo } from "graphql";
import { FindUniqueObjetivoArgs } from "./args/FindUniqueObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
export declare class FindUniqueObjetivoResolver {
    objetivo(ctx: any, info: GraphQLResolveInfo, args: FindUniqueObjetivoArgs): Promise<Objetivo | null>;
}
