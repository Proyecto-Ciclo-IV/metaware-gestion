import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { AvanceUpdateManyWithoutCreadoPorInput } from "../inputs/AvanceUpdateManyWithoutCreadoPorInput";
import { EnumEnum_EstadoUserFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoUserFieldUpdateOperationsInput";
import { EnumEnum_RolFieldUpdateOperationsInput } from "../inputs/EnumEnum_RolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProyectoUpdateManyWithoutLiderInput } from "../inputs/ProyectoUpdateManyWithoutLiderInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutInscripcionesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    telefono?: NullableStringFieldUpdateOperationsInput | undefined;
    rol?: EnumEnum_RolFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoUserFieldUpdateOperationsInput | undefined;
    proyectosLiderados?: ProyectoUpdateManyWithoutLiderInput | undefined;
    avancesCreados?: AvanceUpdateManyWithoutCreadoPorInput | undefined;
    accounts?: AccountUpdateManyWithoutUserInput | undefined;
    sessions?: SessionUpdateManyWithoutUserInput | undefined;
}
