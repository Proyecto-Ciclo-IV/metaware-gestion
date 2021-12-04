import { UserCreateNestedOneWithoutAvancesCreadosInput } from "../inputs/UserCreateNestedOneWithoutAvancesCreadosInput";
export declare class AvanceCreateWithoutProyectoInput {
    id?: string | undefined;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    creadoPor: UserCreateNestedOneWithoutAvancesCreadosInput;
}
