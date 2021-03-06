import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_EstadoInscripcionFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoInscripcionFieldUpdateOperationsInput";
import { ProyectoUpdateOneRequiredWithoutInscripcionesInput } from "../inputs/ProyectoUpdateOneRequiredWithoutInscripcionesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutInscripcionesInput } from "../inputs/UserUpdateOneRequiredWithoutInscripcionesInput";
export declare class InscripcionUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoInscripcionFieldUpdateOperationsInput | undefined;
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | undefined;
    fechaEgreso?: DateTimeFieldUpdateOperationsInput | undefined;
    proyecto?: ProyectoUpdateOneRequiredWithoutInscripcionesInput | undefined;
    estudiante?: UserUpdateOneRequiredWithoutInscripcionesInput | undefined;
}
