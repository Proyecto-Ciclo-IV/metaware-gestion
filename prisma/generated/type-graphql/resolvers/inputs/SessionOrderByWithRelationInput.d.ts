import { UsuarioOrderByWithRelationInput } from "../inputs/UsuarioOrderByWithRelationInput";
export declare class SessionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    sessionToken?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    expires?: "asc" | "desc" | undefined;
    usuario?: UsuarioOrderByWithRelationInput | undefined;
}
