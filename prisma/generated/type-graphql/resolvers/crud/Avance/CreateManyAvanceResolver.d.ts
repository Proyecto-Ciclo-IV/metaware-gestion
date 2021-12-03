import { GraphQLResolveInfo } from "graphql";
import { CreateManyAvanceArgs } from "./args/CreateManyAvanceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAvanceResolver {
    createManyAvance(ctx: any, info: GraphQLResolveInfo, args: CreateManyAvanceArgs): Promise<AffectedRowsOutput>;
}
