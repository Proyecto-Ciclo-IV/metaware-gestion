import { Account } from "../../../models/Account";
import { Avance } from "../../../models/Avance";
import { Inscripcion } from "../../../models/Inscripcion";
import { Proyecto } from "../../../models/Proyecto";
import { Session } from "../../../models/Session";
import { Usuario } from "../../../models/Usuario";
import { UsuarioAccountsArgs } from "./args/UsuarioAccountsArgs";
import { UsuarioAvancesCreadosArgs } from "./args/UsuarioAvancesCreadosArgs";
import { UsuarioInscripcionesArgs } from "./args/UsuarioInscripcionesArgs";
import { UsuarioProyectosLideradosArgs } from "./args/UsuarioProyectosLideradosArgs";
import { UsuarioSessionsArgs } from "./args/UsuarioSessionsArgs";
export declare class UsuarioRelationsResolver {
    proyectosLiderados(usuario: Usuario, ctx: any, args: UsuarioProyectosLideradosArgs): Promise<Proyecto[]>;
    avancesCreados(usuario: Usuario, ctx: any, args: UsuarioAvancesCreadosArgs): Promise<Avance[]>;
    inscripciones(usuario: Usuario, ctx: any, args: UsuarioInscripcionesArgs): Promise<Inscripcion[]>;
    accounts(usuario: Usuario, ctx: any, args: UsuarioAccountsArgs): Promise<Account[]>;
    sessions(usuario: Usuario, ctx: any, args: UsuarioSessionsArgs): Promise<Session[]>;
}
