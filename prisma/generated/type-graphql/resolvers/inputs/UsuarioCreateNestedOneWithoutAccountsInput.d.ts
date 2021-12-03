import { UsuarioCreateOrConnectWithoutAccountsInput } from "../inputs/UsuarioCreateOrConnectWithoutAccountsInput";
import { UsuarioCreateWithoutAccountsInput } from "../inputs/UsuarioCreateWithoutAccountsInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioCreateNestedOneWithoutAccountsInput {
    create?: UsuarioCreateWithoutAccountsInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutAccountsInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
}
