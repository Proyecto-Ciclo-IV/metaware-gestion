import { GraphQLResolveInfo } from "graphql";
import { CreateAvanceArgs } from "./args/CreateAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class CreateAvanceResolver {
    createAvance(ctx: any, info: GraphQLResolveInfo, args: CreateAvanceArgs): Promise<Avance>;
}
