export declare class ProyectoCreateManyInput {
    id?: string | undefined;
    nombre: string;
    descripcion?: string | undefined;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    UserId: string;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarrollo" | "Terminado";
}
