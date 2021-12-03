import { AccountCreateManyUsuarioInputEnvelope } from "../inputs/AccountCreateManyUsuarioInputEnvelope";
import { AccountCreateOrConnectWithoutUsuarioInput } from "../inputs/AccountCreateOrConnectWithoutUsuarioInput";
import { AccountCreateWithoutUsuarioInput } from "../inputs/AccountCreateWithoutUsuarioInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";
export declare class AccountCreateNestedManyWithoutUsuarioInput {
    create?: AccountCreateWithoutUsuarioInput[] | undefined;
    connectOrCreate?: AccountCreateOrConnectWithoutUsuarioInput[] | undefined;
    createMany?: AccountCreateManyUsuarioInputEnvelope | undefined;
    connect?: AccountWhereUniqueInput[] | undefined;
}
