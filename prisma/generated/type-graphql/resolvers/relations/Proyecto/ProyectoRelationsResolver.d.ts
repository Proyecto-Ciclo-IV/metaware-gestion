import { Avance } from "../../../models/Avance";
import { Inscripcion } from "../../../models/Inscripcion";
import { Objetivo } from "../../../models/Objetivo";
import { Proyecto } from "../../../models/Proyecto";
import { User } from "../../../models/User";
import { ProyectoAvancesArgs } from "./args/ProyectoAvancesArgs";
import { ProyectoInscripcionesArgs } from "./args/ProyectoInscripcionesArgs";
import { ProyectoObjetivosArgs } from "./args/ProyectoObjetivosArgs";
export declare class ProyectoRelationsResolver {
    lider(proyecto: Proyecto, ctx: any): Promise<User>;
    objetivos(proyecto: Proyecto, ctx: any, args: ProyectoObjetivosArgs): Promise<Objetivo[]>;
    avances(proyecto: Proyecto, ctx: any, args: ProyectoAvancesArgs): Promise<Avance[]>;
    inscripciones(proyecto: Proyecto, ctx: any, args: ProyectoInscripcionesArgs): Promise<Inscripcion[]>;
}
