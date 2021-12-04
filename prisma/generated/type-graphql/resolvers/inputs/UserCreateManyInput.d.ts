export declare class UserCreateManyInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    telefono?: string | undefined;
    rol?: "Estudiante" | "Lider" | "Administrador" | undefined;
    estado?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
}
