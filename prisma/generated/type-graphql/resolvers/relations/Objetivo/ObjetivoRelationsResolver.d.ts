import { Objetivo } from "../../../models/Objetivo";
import { Proyecto } from "../../../models/Proyecto";
export declare class ObjetivoRelationsResolver {
    proyecto(objetivo: Objetivo, ctx: any): Promise<Proyecto>;
}
