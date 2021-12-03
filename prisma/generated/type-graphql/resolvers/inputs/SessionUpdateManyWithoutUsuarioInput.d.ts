import { SessionCreateManyUsuarioInputEnvelope } from "../inputs/SessionCreateManyUsuarioInputEnvelope";
import { SessionCreateOrConnectWithoutUsuarioInput } from "../inputs/SessionCreateOrConnectWithoutUsuarioInput";
import { SessionCreateWithoutUsuarioInput } from "../inputs/SessionCreateWithoutUsuarioInput";
import { SessionScalarWhereInput } from "../inputs/SessionScalarWhereInput";
import { SessionUpdateManyWithWhereWithoutUsuarioInput } from "../inputs/SessionUpdateManyWithWhereWithoutUsuarioInput";
import { SessionUpdateWithWhereUniqueWithoutUsuarioInput } from "../inputs/SessionUpdateWithWhereUniqueWithoutUsuarioInput";
import { SessionUpsertWithWhereUniqueWithoutUsuarioInput } from "../inputs/SessionUpsertWithWhereUniqueWithoutUsuarioInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";
export declare class SessionUpdateManyWithoutUsuarioInput {
    create?: SessionCreateWithoutUsuarioInput[] | undefined;
    connectOrCreate?: SessionCreateOrConnectWithoutUsuarioInput[] | undefined;
    upsert?: SessionUpsertWithWhereUniqueWithoutUsuarioInput[] | undefined;
    createMany?: SessionCreateManyUsuarioInputEnvelope | undefined;
    set?: SessionWhereUniqueInput[] | undefined;
    disconnect?: SessionWhereUniqueInput[] | undefined;
    delete?: SessionWhereUniqueInput[] | undefined;
    connect?: SessionWhereUniqueInput[] | undefined;
    update?: SessionUpdateWithWhereUniqueWithoutUsuarioInput[] | undefined;
    updateMany?: SessionUpdateManyWithWhereWithoutUsuarioInput[] | undefined;
    deleteMany?: SessionScalarWhereInput[] | undefined;
}
