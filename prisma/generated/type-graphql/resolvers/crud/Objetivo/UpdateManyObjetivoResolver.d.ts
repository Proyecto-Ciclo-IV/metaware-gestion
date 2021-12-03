import { GraphQLResolveInfo } from "graphql";
import { UpdateManyObjetivoArgs } from "./args/UpdateManyObjetivoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyObjetivoResolver {
    updateManyObjetivo(ctx: any, info: GraphQLResolveInfo, args: UpdateManyObjetivoArgs): Promise<AffectedRowsOutput>;
}
