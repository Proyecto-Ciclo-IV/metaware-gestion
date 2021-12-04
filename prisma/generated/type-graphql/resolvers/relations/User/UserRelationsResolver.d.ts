import { Account } from "../../../models/Account";
import { Avance } from "../../../models/Avance";
import { Inscripcion } from "../../../models/Inscripcion";
import { Proyecto } from "../../../models/Proyecto";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserAvancesCreadosArgs } from "./args/UserAvancesCreadosArgs";
import { UserInscripcionesArgs } from "./args/UserInscripcionesArgs";
import { UserProyectosLideradosArgs } from "./args/UserProyectosLideradosArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    proyectosLiderados(user: User, ctx: any, args: UserProyectosLideradosArgs): Promise<Proyecto[]>;
    avancesCreados(user: User, ctx: any, args: UserAvancesCreadosArgs): Promise<Avance[]>;
    inscripciones(user: User, ctx: any, args: UserInscripcionesArgs): Promise<Inscripcion[]>;
    accounts(user: User, ctx: any, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, args: UserSessionsArgs): Promise<Session[]>;
}
