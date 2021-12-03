import { ProyectoCreateNestedOneWithoutObjetivosInput } from "../inputs/ProyectoCreateNestedOneWithoutObjetivosInput";
export declare class ObjetivoCreateInput {
    id?: string | undefined;
    descripcion: string;
    tipo: "General" | "Especifico";
    proyecto: ProyectoCreateNestedOneWithoutObjetivosInput;
}
