import { Session } from "../../../models/Session";
import { Usuario } from "../../../models/Usuario";
export declare class SessionRelationsResolver {
    usuario(session: Session, ctx: any): Promise<Usuario>;
}
