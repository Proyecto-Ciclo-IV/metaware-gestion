import { AvanceCreateManyCreadoPorInputEnvelope } from "../inputs/AvanceCreateManyCreadoPorInputEnvelope";
import { AvanceCreateOrConnectWithoutCreadoPorInput } from "../inputs/AvanceCreateOrConnectWithoutCreadoPorInput";
import { AvanceCreateWithoutCreadoPorInput } from "../inputs/AvanceCreateWithoutCreadoPorInput";
import { AvanceScalarWhereInput } from "../inputs/AvanceScalarWhereInput";
import { AvanceUpdateManyWithWhereWithoutCreadoPorInput } from "../inputs/AvanceUpdateManyWithWhereWithoutCreadoPorInput";
import { AvanceUpdateWithWhereUniqueWithoutCreadoPorInput } from "../inputs/AvanceUpdateWithWhereUniqueWithoutCreadoPorInput";
import { AvanceUpsertWithWhereUniqueWithoutCreadoPorInput } from "../inputs/AvanceUpsertWithWhereUniqueWithoutCreadoPorInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";
export declare class AvanceUpdateManyWithoutCreadoPorInput {
    create?: AvanceCreateWithoutCreadoPorInput[] | undefined;
    connectOrCreate?: AvanceCreateOrConnectWithoutCreadoPorInput[] | undefined;
    upsert?: AvanceUpsertWithWhereUniqueWithoutCreadoPorInput[] | undefined;
    createMany?: AvanceCreateManyCreadoPorInputEnvelope | undefined;
    set?: AvanceWhereUniqueInput[] | undefined;
    disconnect?: AvanceWhereUniqueInput[] | undefined;
    delete?: AvanceWhereUniqueInput[] | undefined;
    connect?: AvanceWhereUniqueInput[] | undefined;
    update?: AvanceUpdateWithWhereUniqueWithoutCreadoPorInput[] | undefined;
    updateMany?: AvanceUpdateManyWithWhereWithoutCreadoPorInput[] | undefined;
    deleteMany?: AvanceScalarWhereInput[] | undefined;
}
