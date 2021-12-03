import { GraphQLResolveInfo } from "graphql";
import { FindManyObjetivoArgs } from "./args/FindManyObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
export declare class FindManyObjetivoResolver {
    objetivos(ctx: any, info: GraphQLResolveInfo, args: FindManyObjetivoArgs): Promise<Objetivo[]>;
}
