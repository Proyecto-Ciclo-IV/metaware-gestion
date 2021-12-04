export declare class UserMinAggregate {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    telefono: string | null;
    rol: "Estudiante" | "Lider" | "Administrador" | null;
    estado: "Pendiente" | "Autorizado" | "NoAutorizado" | null;
}
