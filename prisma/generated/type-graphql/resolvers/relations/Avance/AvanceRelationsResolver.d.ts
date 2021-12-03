import { Avance } from "../../../models/Avance";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
export declare class AvanceRelationsResolver {
    proyecto(avance: Avance, ctx: any): Promise<Proyecto>;
    creadoPor(avance: Avance, ctx: any): Promise<Usuario>;
}
