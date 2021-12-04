import { ProyectoCreateNestedOneWithoutAvancesInput } from "../inputs/ProyectoCreateNestedOneWithoutAvancesInput";
import { UserCreateNestedOneWithoutAvancesCreadosInput } from "../inputs/UserCreateNestedOneWithoutAvancesCreadosInput";
export declare class AvanceCreateInput {
    id?: string | undefined;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    proyecto: ProyectoCreateNestedOneWithoutAvancesInput;
    creadoPor: UserCreateNestedOneWithoutAvancesCreadosInput;
}
