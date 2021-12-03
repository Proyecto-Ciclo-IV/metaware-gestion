import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutAvancesCreadosInput } from "../inputs/UsuarioUpdateOneRequiredWithoutAvancesCreadosInput";
export declare class AvanceUpdateWithoutProyectoInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    fecha?: DateTimeFieldUpdateOperationsInput | undefined;
    descripcion?: StringFieldUpdateOperationsInput | undefined;
    observaciones?: StringFieldUpdateOperationsInput | undefined;
    creadoPor?: UsuarioUpdateOneRequiredWithoutAvancesCreadosInput | undefined;
}
