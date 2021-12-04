import { UserCreateNestedOneWithoutInscripcionesInput } from "../inputs/UserCreateNestedOneWithoutInscripcionesInput";
export declare class InscripcionCreateWithoutProyectoInput {
    id?: string | undefined;
    estado: "Aceptada" | "Rechazada";
    fechaIngreso: Date;
    fechaEgreso: Date;
    estudiante: UserCreateNestedOneWithoutInscripcionesInput;
}
