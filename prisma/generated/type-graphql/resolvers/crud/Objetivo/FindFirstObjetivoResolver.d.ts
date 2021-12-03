import { GraphQLResolveInfo } from "graphql";
import { FindFirstObjetivoArgs } from "./args/FindFirstObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
export declare class FindFirstObjetivoResolver {
    findFirstObjetivo(ctx: any, info: GraphQLResolveInfo, args: FindFirstObjetivoArgs): Promise<Objetivo | null>;
}
