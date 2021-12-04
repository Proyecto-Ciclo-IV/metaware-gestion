import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { AvanceCreateNestedManyWithoutCreadoPorInput } from "../inputs/AvanceCreateNestedManyWithoutCreadoPorInput";
import { ProyectoCreateNestedManyWithoutLiderInput } from "../inputs/ProyectoCreateNestedManyWithoutLiderInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutInscripcionesInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    telefono?: string | undefined;
    rol?: "Estudiante" | "Lider" | "Administrador" | undefined;
    estado?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
    proyectosLiderados?: ProyectoCreateNestedManyWithoutLiderInput | undefined;
    avancesCreados?: AvanceCreateNestedManyWithoutCreadoPorInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
}
