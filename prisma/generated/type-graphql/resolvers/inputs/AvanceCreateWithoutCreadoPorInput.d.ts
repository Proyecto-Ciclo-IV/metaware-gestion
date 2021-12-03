import { ProyectoCreateNestedOneWithoutAvancesInput } from "../inputs/ProyectoCreateNestedOneWithoutAvancesInput";
export declare class AvanceCreateWithoutCreadoPorInput {
    id?: string | undefined;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    proyecto: ProyectoCreateNestedOneWithoutAvancesInput;
}
