import { GraphQLResolveInfo } from "graphql";
import { DeleteObjetivoArgs } from "./args/DeleteObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
export declare class DeleteObjetivoResolver {
    deleteObjetivo(ctx: any, info: GraphQLResolveInfo, args: DeleteObjetivoArgs): Promise<Objetivo | null>;
}
