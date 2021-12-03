import { UsuarioCreateNestedOneWithoutSessionsInput } from "../inputs/UsuarioCreateNestedOneWithoutSessionsInput";
export declare class SessionCreateInput {
    id?: string | undefined;
    sessionToken: string;
    expires: Date;
    usuario: UsuarioCreateNestedOneWithoutSessionsInput;
}
