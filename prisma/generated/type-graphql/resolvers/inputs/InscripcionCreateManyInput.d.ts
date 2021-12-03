export declare class InscripcionCreateManyInput {
    id?: string | undefined;
    estado: "Aceptada" | "Rechazada";
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyectoId: string;
    userId: string;
}
