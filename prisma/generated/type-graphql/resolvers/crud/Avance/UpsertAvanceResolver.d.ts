import { GraphQLResolveInfo } from "graphql";
import { UpsertAvanceArgs } from "./args/UpsertAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class UpsertAvanceResolver {
    upsertAvance(ctx: any, info: GraphQLResolveInfo, args: UpsertAvanceArgs): Promise<Avance>;
}
