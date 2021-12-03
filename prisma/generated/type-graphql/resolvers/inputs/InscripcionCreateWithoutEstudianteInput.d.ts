import { ProyectoCreateNestedOneWithoutInscripcionesInput } from "../inputs/ProyectoCreateNestedOneWithoutInscripcionesInput";
export declare class InscripcionCreateWithoutEstudianteInput {
    id?: string | undefined;
    estado: "Aceptada" | "Rechazada";
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto: ProyectoCreateNestedOneWithoutInscripcionesInput;
}
