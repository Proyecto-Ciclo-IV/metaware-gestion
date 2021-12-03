import { GraphQLResolveInfo } from "graphql";
import { FindFirstAvanceArgs } from "./args/FindFirstAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class FindFirstAvanceResolver {
    findFirstAvance(ctx: any, info: GraphQLResolveInfo, args: FindFirstAvanceArgs): Promise<Avance | null>;
}
