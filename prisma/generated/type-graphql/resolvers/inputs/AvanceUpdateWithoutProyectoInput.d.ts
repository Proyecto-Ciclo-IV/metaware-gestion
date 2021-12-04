import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAvancesCreadosInput } from "../inputs/UserUpdateOneRequiredWithoutAvancesCreadosInput";
export declare class AvanceUpdateWithoutProyectoInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    fecha?: DateTimeFieldUpdateOperationsInput | undefined;
    descripcion?: StringFieldUpdateOperationsInput | undefined;
    observaciones?: StringFieldUpdateOperationsInput | undefined;
    creadoPor?: UserUpdateOneRequiredWithoutAvancesCreadosInput | undefined;
}
