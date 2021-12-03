import { AccountUpdateManyWithoutUsuarioInput } from "../inputs/AccountUpdateManyWithoutUsuarioInput";
import { AvanceUpdateManyWithoutCreadoPorInput } from "../inputs/AvanceUpdateManyWithoutCreadoPorInput";
import { EnumEnum_EstadoUsuarioFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoUsuarioFieldUpdateOperationsInput";
import { EnumEnum_RolFieldUpdateOperationsInput } from "../inputs/EnumEnum_RolFieldUpdateOperationsInput";
import { InscripcionUpdateManyWithoutEstudianteInput } from "../inputs/InscripcionUpdateManyWithoutEstudianteInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProyectoUpdateManyWithoutLiderInput } from "../inputs/ProyectoUpdateManyWithoutLiderInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UsuarioUpdateWithoutSessionsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    correo?: NullableStringFieldUpdateOperationsInput | undefined;
    correoVerificado?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    telefono?: NullableStringFieldUpdateOperationsInput | undefined;
    rol?: EnumEnum_RolFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoUsuarioFieldUpdateOperationsInput | undefined;
    proyectosLiderados?: ProyectoUpdateManyWithoutLiderInput | undefined;
    avancesCreados?: AvanceUpdateManyWithoutCreadoPorInput | undefined;
    inscripciones?: InscripcionUpdateManyWithoutEstudianteInput | undefined;
    accounts?: AccountUpdateManyWithoutUsuarioInput | undefined;
}