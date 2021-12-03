import { UsuarioCreateOrConnectWithoutAccountsInput } from "../inputs/UsuarioCreateOrConnectWithoutAccountsInput";
import { UsuarioCreateWithoutAccountsInput } from "../inputs/UsuarioCreateWithoutAccountsInput";
import { UsuarioUpdateWithoutAccountsInput } from "../inputs/UsuarioUpdateWithoutAccountsInput";
import { UsuarioUpsertWithoutAccountsInput } from "../inputs/UsuarioUpsertWithoutAccountsInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioUpdateOneRequiredWithoutAccountsInput {
    create?: UsuarioCreateWithoutAccountsInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutAccountsInput | undefined;
    upsert?: UsuarioUpsertWithoutAccountsInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
    update?: UsuarioUpdateWithoutAccountsInput | undefined;
}
