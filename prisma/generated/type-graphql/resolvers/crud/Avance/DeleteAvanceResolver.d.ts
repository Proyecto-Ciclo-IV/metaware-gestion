import { GraphQLResolveInfo } from "graphql";
import { DeleteAvanceArgs } from "./args/DeleteAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class DeleteAvanceResolver {
    deleteAvance(ctx: any, info: GraphQLResolveInfo, args: DeleteAvanceArgs): Promise<Avance | null>;
}
