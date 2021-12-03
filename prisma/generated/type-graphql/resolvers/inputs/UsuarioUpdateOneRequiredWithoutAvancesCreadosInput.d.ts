import { UsuarioCreateOrConnectWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateOrConnectWithoutAvancesCreadosInput";
import { UsuarioCreateWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateWithoutAvancesCreadosInput";
import { UsuarioUpdateWithoutAvancesCreadosInput } from "../inputs/UsuarioUpdateWithoutAvancesCreadosInput";
import { UsuarioUpsertWithoutAvancesCreadosInput } from "../inputs/UsuarioUpsertWithoutAvancesCreadosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioUpdateOneRequiredWithoutAvancesCreadosInput {
    create?: UsuarioCreateWithoutAvancesCreadosInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvancesCreadosInput | undefined;
    upsert?: UsuarioUpsertWithoutAvancesCreadosInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
    update?: UsuarioUpdateWithoutAvancesCreadosInput | undefined;
}
