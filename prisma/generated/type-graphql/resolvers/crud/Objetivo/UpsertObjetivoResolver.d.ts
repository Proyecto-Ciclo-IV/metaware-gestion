import { GraphQLResolveInfo } from "graphql";
import { UpsertObjetivoArgs } from "./args/UpsertObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
export declare class UpsertObjetivoResolver {
    upsertObjetivo(ctx: any, info: GraphQLResolveInfo, args: UpsertObjetivoArgs): Promise<Objetivo>;
}
