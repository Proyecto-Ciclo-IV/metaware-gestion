import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { AvanceUpdateManyWithoutCreadoPorInput } from "../inputs/AvanceUpdateManyWithoutCreadoPorInput";
import { EnumEnum_EstadoUserFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoUserFieldUpdateOperationsInput";
import { EnumEnum_RolFieldUpdateOperationsInput } from "../inputs/EnumEnum_RolFieldUpdateOperationsInput";
import { InscripcionUpdateManyWithoutEstudianteInput } from "../inputs/InscripcionUpdateManyWithoutEstudianteInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutProyectosLideradosInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    telefono?: NullableStringFieldUpdateOperationsInput | undefined;
    rol?: EnumEnum_RolFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoUserFieldUpdateOperationsInput | undefined;
    avancesCreados?: AvanceUpdateManyWithoutCreadoPorInput | undefined;
    inscripciones?: InscripcionUpdateManyWithoutEstudianteInput | undefined;
    accounts?: AccountUpdateManyWithoutUserInput | undefined;
    sessions?: SessionUpdateManyWithoutUserInput | undefined;
}
