import { Account } from "../models/Account";
import { Avance } from "../models/Avance";
import { Inscripcion } from "../models/Inscripcion";
import { Proyecto } from "../models/Proyecto";
import { Session } from "../models/Session";
import { UsuarioCount } from "../resolvers/outputs/UsuarioCount";
export declare class Usuario {
    id: string;
    name?: string | null;
    correo?: string | null;
    correoVerificado?: Date | null;
    image?: string | null;
    telefono?: string | null;
    rol: "Estudiante" | "Lider" | "Administrador";
    estado: "Pendiente" | "Autorizado" | "NoAutorizado";
    proyectosLiderados?: Proyecto[];
    avancesCreados?: Avance[];
    inscripciones?: Inscripcion[];
    accounts?: Account[];
    sessions?: Session[];
    _count: UsuarioCount;
}
