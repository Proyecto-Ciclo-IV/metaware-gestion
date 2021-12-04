import { AvanceCreateNestedManyWithoutProyectoInput } from "../inputs/AvanceCreateNestedManyWithoutProyectoInput";
import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { ObjetivoCreateNestedManyWithoutProyectoInput } from "../inputs/ObjetivoCreateNestedManyWithoutProyectoInput";
import { UserCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UserCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateInput {
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
    inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
}
