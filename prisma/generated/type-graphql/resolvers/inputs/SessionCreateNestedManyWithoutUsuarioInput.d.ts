import { SessionCreateManyUsuarioInputEnvelope } from "../inputs/SessionCreateManyUsuarioInputEnvelope";
import { SessionCreateOrConnectWithoutUsuarioInput } from "../inputs/SessionCreateOrConnectWithoutUsuarioInput";
import { SessionCreateWithoutUsuarioInput } from "../inputs/SessionCreateWithoutUsuarioInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";
export declare class SessionCreateNestedManyWithoutUsuarioInput {
    create?: SessionCreateWithoutUsuarioInput[] | undefined;
    connectOrCreate?: SessionCreateOrConnectWithoutUsuarioInput[] | undefined;
    createMany?: SessionCreateManyUsuarioInputEnvelope | undefined;
    connect?: SessionWhereUniqueInput[] | undefined;
}
