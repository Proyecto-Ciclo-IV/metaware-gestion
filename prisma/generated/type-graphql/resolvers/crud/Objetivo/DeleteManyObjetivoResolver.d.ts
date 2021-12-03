import { GraphQLResolveInfo } from "graphql";
import { DeleteManyObjetivoArgs } from "./args/DeleteManyObjetivoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyObjetivoResolver {
    deleteManyObjetivo(ctx: any, info: GraphQLResolveInfo, args: DeleteManyObjetivoArgs): Promise<AffectedRowsOutput>;
}
