import { GraphQLResolveInfo } from "graphql";
import { UpdateAvanceArgs } from "./args/UpdateAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class UpdateAvanceResolver {
    updateAvance(ctx: any, info: GraphQLResolveInfo, args: UpdateAvanceArgs): Promise<Avance | null>;
}
