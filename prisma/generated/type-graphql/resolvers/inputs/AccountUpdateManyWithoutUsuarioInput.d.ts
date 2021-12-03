import { AccountCreateManyUsuarioInputEnvelope } from "../inputs/AccountCreateManyUsuarioInputEnvelope";
import { AccountCreateOrConnectWithoutUsuarioInput } from "../inputs/AccountCreateOrConnectWithoutUsuarioInput";
import { AccountCreateWithoutUsuarioInput } from "../inputs/AccountCreateWithoutUsuarioInput";
import { AccountScalarWhereInput } from "../inputs/AccountScalarWhereInput";
import { AccountUpdateManyWithWhereWithoutUsuarioInput } from "../inputs/AccountUpdateManyWithWhereWithoutUsuarioInput";
import { AccountUpdateWithWhereUniqueWithoutUsuarioInput } from "../inputs/AccountUpdateWithWhereUniqueWithoutUsuarioInput";
import { AccountUpsertWithWhereUniqueWithoutUsuarioInput } from "../inputs/AccountUpsertWithWhereUniqueWithoutUsuarioInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";
export declare class AccountUpdateManyWithoutUsuarioInput {
    create?: AccountCreateWithoutUsuarioInput[] | undefined;
    connectOrCreate?: AccountCreateOrConnectWithoutUsuarioInput[] | undefined;
    upsert?: AccountUpsertWithWhereUniqueWithoutUsuarioInput[] | undefined;
    createMany?: AccountCreateManyUsuarioInputEnvelope | undefined;
    set?: AccountWhereUniqueInput[] | undefined;
    disconnect?: AccountWhereUniqueInput[] | undefined;
    delete?: AccountWhereUniqueInput[] | undefined;
    connect?: AccountWhereUniqueInput[] | undefined;
    update?: AccountUpdateWithWhereUniqueWithoutUsuarioInput[] | undefined;
    updateMany?: AccountUpdateManyWithWhereWithoutUsuarioInput[] | undefined;
    deleteMany?: AccountScalarWhereInput[] | undefined;
}
