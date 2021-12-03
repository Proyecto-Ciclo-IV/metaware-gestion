import { UsuarioCreateOrConnectWithoutSessionsInput } from "../inputs/UsuarioCreateOrConnectWithoutSessionsInput";
import { UsuarioCreateWithoutSessionsInput } from "../inputs/UsuarioCreateWithoutSessionsInput";
import { UsuarioUpdateWithoutSessionsInput } from "../inputs/UsuarioUpdateWithoutSessionsInput";
import { UsuarioUpsertWithoutSessionsInput } from "../inputs/UsuarioUpsertWithoutSessionsInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioUpdateOneRequiredWithoutSessionsInput {
    create?: UsuarioCreateWithoutSessionsInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutSessionsInput | undefined;
    upsert?: UsuarioUpsertWithoutSessionsInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
    update?: UsuarioUpdateWithoutSessionsInput | undefined;
}
