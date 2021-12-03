export declare class UsuarioCreateManyInput {
    id?: string | undefined;
    name?: string | undefined;
    correo?: string | undefined;
    correoVerificado?: Date | undefined;
    image?: string | undefined;
    telefono?: string | undefined;
    rol?: "Estudiante" | "Lider" | "Administrador" | undefined;
    estado?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
}
