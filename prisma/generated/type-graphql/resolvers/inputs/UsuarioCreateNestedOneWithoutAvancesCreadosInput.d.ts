import { UsuarioCreateOrConnectWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateOrConnectWithoutAvancesCreadosInput";
import { UsuarioCreateWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateWithoutAvancesCreadosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioCreateNestedOneWithoutAvancesCreadosInput {
    create?: UsuarioCreateWithoutAvancesCreadosInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvancesCreadosInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
}
