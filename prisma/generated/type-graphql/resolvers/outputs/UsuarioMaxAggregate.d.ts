export declare class UsuarioMaxAggregate {
    id: string | null;
    name: string | null;
    correo: string | null;
    correoVerificado: Date | null;
    image: string | null;
    telefono: string | null;
    rol: "Estudiante" | "Lider" | "Administrador" | null;
    estado: "Pendiente" | "Autorizado" | "NoAutorizado" | null;
}
