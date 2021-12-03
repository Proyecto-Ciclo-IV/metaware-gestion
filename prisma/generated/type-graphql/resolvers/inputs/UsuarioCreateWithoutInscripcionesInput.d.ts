import { AccountCreateNestedManyWithoutUsuarioInput } from "../inputs/AccountCreateNestedManyWithoutUsuarioInput";
import { AvanceCreateNestedManyWithoutCreadoPorInput } from "../inputs/AvanceCreateNestedManyWithoutCreadoPorInput";
import { ProyectoCreateNestedManyWithoutLiderInput } from "../inputs/ProyectoCreateNestedManyWithoutLiderInput";
import { SessionCreateNestedManyWithoutUsuarioInput } from "../inputs/SessionCreateNestedManyWithoutUsuarioInput";
export declare class UsuarioCreateWithoutInscripcionesInput {
    id?: string | undefined;
    name?: string | undefined;
    correo?: string | undefined;
    correoVerificado?: Date | undefined;
    image?: string | undefined;
    telefono?: string | undefined;
    rol?: "Estudiante" | "Lider" | "Administrador" | undefined;
    estado?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
    proyectosLiderados?: ProyectoCreateNestedManyWithoutLiderInput | undefined;
    avancesCreados?: AvanceCreateNestedManyWithoutCreadoPorInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUsuarioInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUsuarioInput | undefined;
}
