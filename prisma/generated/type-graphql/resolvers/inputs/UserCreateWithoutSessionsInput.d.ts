import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { AvanceCreateNestedManyWithoutCreadoPorInput } from "../inputs/AvanceCreateNestedManyWithoutCreadoPorInput";
import { InscripcionCreateNestedManyWithoutEstudianteInput } from "../inputs/InscripcionCreateNestedManyWithoutEstudianteInput";
import { ProyectoCreateNestedManyWithoutLiderInput } from "../inputs/ProyectoCreateNestedManyWithoutLiderInput";
export declare class UserCreateWithoutSessionsInput {
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
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
}
