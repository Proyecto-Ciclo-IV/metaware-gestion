import { GraphQLResolveInfo } from "graphql";
import { CreateObjetivoArgs } from "./args/CreateObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
export declare class CreateObjetivoResolver {
    createObjetivo(ctx: any, info: GraphQLResolveInfo, args: CreateObjetivoArgs): Promise<Objetivo>;
}
