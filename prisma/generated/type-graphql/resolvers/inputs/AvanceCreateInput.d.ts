import { ProyectoCreateNestedOneWithoutAvancesInput } from "../inputs/ProyectoCreateNestedOneWithoutAvancesInput";
import { UsuarioCreateNestedOneWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateNestedOneWithoutAvancesCreadosInput";
export declare class AvanceCreateInput {
    id?: string | undefined;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    proyecto: ProyectoCreateNestedOneWithoutAvancesInput;
    creadoPor: UsuarioCreateNestedOneWithoutAvancesCreadosInput;
}
