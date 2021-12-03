import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAvanceArgs } from "./args/UpdateManyAvanceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAvanceResolver {
    updateManyAvance(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAvanceArgs): Promise<AffectedRowsOutput>;
}
