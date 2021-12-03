import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutSessionsInput } from "../inputs/UsuarioUpdateOneRequiredWithoutSessionsInput";
export declare class SessionUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    sessionToken?: StringFieldUpdateOperationsInput | undefined;
    expires?: DateTimeFieldUpdateOperationsInput | undefined;
    usuario?: UsuarioUpdateOneRequiredWithoutSessionsInput | undefined;
}
