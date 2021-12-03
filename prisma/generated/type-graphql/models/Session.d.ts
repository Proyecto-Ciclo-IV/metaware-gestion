import { Usuario } from "../models/Usuario";
export declare class Session {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    usuario?: Usuario;
}
