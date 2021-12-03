import { AccountCreateNestedManyWithoutUsuarioInput } from "../inputs/AccountCreateNestedManyWithoutUsuarioInput";
import { InscripcionCreateNestedManyWithoutEstudianteInput } from "../inputs/InscripcionCreateNestedManyWithoutEstudianteInput";
import { ProyectoCreateNestedManyWithoutLiderInput } from "../inputs/ProyectoCreateNestedManyWithoutLiderInput";
import { SessionCreateNestedManyWithoutUsuarioInput } from "../inputs/SessionCreateNestedManyWithoutUsuarioInput";
export declare class UsuarioCreateWithoutAvancesCreadosInput {
    id?: string | undefined;
    name?: string | undefined;
    correo?: string | undefined;
    correoVerificado?: Date | undefined;
    image?: string | undefined;
    telefono?: string | undefined;
    rol?: "Estudiante" | "Lider" | "Administrador" | undefined;
    estado?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
    proyectosLiderados?: ProyectoCreateNestedManyWithoutLiderInput | undefined;
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUsuarioInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUsuarioInput | undefined;
}
