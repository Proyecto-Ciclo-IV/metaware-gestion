import { AvanceCreateNestedManyWithoutProyectoInput } from "../inputs/AvanceCreateNestedManyWithoutProyectoInput";
import { ObjetivoCreateNestedManyWithoutProyectoInput } from "../inputs/ObjetivoCreateNestedManyWithoutProyectoInput";
import { UserCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UserCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateWithoutInscripcionesInput {
    id?: string | undefined;
    nombre: string;
    descripcion?: string | undefined;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarrollo" | "Terminado";
    lider: UserCreateNestedOneWithoutProyectosLideradosInput;
    objetivos?: ObjetivoCreateNestedManyWithoutProyectoInput | undefined;
    avances?: AvanceCreateNestedManyWithoutProyectoInput | undefined;
}
