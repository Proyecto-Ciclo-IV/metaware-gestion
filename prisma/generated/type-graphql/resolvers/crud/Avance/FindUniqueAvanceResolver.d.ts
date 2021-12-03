import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAvanceArgs } from "./args/FindUniqueAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class FindUniqueAvanceResolver {
    avance(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAvanceArgs): Promise<Avance | null>;
}
