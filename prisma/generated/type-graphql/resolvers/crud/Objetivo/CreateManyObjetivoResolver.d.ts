import { GraphQLResolveInfo } from "graphql";
import { CreateManyObjetivoArgs } from "./args/CreateManyObjetivoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyObjetivoResolver {
    createManyObjetivo(ctx: any, info: GraphQLResolveInfo, args: CreateManyObjetivoArgs): Promise<AffectedRowsOutput>;
}
