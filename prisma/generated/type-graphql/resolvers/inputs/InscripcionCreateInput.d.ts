import { ProyectoCreateNestedOneWithoutInscripcionesInput } from "../inputs/ProyectoCreateNestedOneWithoutInscripcionesInput";
import { UserCreateNestedOneWithoutInscripcionesInput } from "../inputs/UserCreateNestedOneWithoutInscripcionesInput";
export declare class InscripcionCreateInput {
    id?: string | undefined;
    estado: "Aceptada" | "Rechazada";
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto: ProyectoCreateNestedOneWithoutInscripcionesInput;
    estudiante: UserCreateNestedOneWithoutInscripcionesInput;
}
