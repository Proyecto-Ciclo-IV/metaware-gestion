import { UsuarioCreateOrConnectWithoutSessionsInput } from "../inputs/UsuarioCreateOrConnectWithoutSessionsInput";
import { UsuarioCreateWithoutSessionsInput } from "../inputs/UsuarioCreateWithoutSessionsInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioCreateNestedOneWithoutSessionsInput {
    create?: UsuarioCreateWithoutSessionsInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutSessionsInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
}
