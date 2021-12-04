import { Account } from "../models/Account";
import { Avance } from "../models/Avance";
import { Inscripcion } from "../models/Inscripcion";
import { Proyecto } from "../models/Proyecto";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    telefono?: string | null;
    rol: "Estudiante" | "Lider" | "Administrador";
    estado: "Pendiente" | "Autorizado" | "NoAutorizado";
    proyectosLiderados?: Proyecto[];
    avancesCreados?: Avance[];
    inscripciones?: Inscripcion[];
    accounts?: Account[];
    sessions?: Session[];
    _count: UserCount;
}
