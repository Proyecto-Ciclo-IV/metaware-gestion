import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAvanceArgs } from "./args/DeleteManyAvanceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAvanceResolver {
    deleteManyAvance(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAvanceArgs): Promise<AffectedRowsOutput>;
}
