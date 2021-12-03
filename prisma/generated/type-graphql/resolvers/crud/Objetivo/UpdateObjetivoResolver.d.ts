import { GraphQLResolveInfo } from "graphql";
import { UpdateObjetivoArgs } from "./args/UpdateObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
export declare class UpdateObjetivoResolver {
    updateObjetivo(ctx: any, info: GraphQLResolveInfo, args: UpdateObjetivoArgs): Promise<Objetivo | null>;
}
