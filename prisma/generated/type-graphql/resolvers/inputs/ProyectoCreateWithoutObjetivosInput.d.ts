import { AvanceCreateNestedManyWithoutProyectoInput } from "../inputs/AvanceCreateNestedManyWithoutProyectoInput";
import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { UserCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UserCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateWithoutObjetivosInput {
    id?: string | undefined;
    nombre: string;
    descripcion?: string | undefined;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarrollo" | "Terminado";
    lider: UserCreateNestedOneWithoutProyectosLideradosInput;
    avances?: AvanceCreateNestedManyWithoutProyectoInput | undefined;
    inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
}
