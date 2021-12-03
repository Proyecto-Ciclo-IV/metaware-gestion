import { UsuarioCreateNestedOneWithoutInscripcionesInput } from "../inputs/UsuarioCreateNestedOneWithoutInscripcionesInput";
export declare class InscripcionCreateWithoutProyectoInput {
    id?: string | undefined;
    estado: "Aceptada" | "Rechazada";
    fechaIngreso: Date;
    fechaEgreso: Date;
    estudiante: UsuarioCreateNestedOneWithoutInscripcionesInput;
}
