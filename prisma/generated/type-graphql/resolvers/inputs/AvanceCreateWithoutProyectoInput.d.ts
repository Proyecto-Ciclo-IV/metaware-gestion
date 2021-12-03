import { UsuarioCreateNestedOneWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateNestedOneWithoutAvancesCreadosInput";
export declare class AvanceCreateWithoutProyectoInput {
    id?: string | undefined;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    creadoPor: UsuarioCreateNestedOneWithoutAvancesCreadosInput;
}
