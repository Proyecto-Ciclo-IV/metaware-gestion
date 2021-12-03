import { EnumEnum_TipoObjetivoFieldUpdateOperationsInput } from "../inputs/EnumEnum_TipoObjetivoFieldUpdateOperationsInput";
import { ProyectoUpdateOneRequiredWithoutObjetivosInput } from "../inputs/ProyectoUpdateOneRequiredWithoutObjetivosInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ObjetivoUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    descripcion?: StringFieldUpdateOperationsInput | undefined;
    tipo?: EnumEnum_TipoObjetivoFieldUpdateOperationsInput | undefined;
    proyecto?: ProyectoUpdateOneRequiredWithoutObjetivosInput | undefined;
}
