import { AvanceCreateManyCreadoPorInputEnvelope } from "../inputs/AvanceCreateManyCreadoPorInputEnvelope";
import { AvanceCreateOrConnectWithoutCreadoPorInput } from "../inputs/AvanceCreateOrConnectWithoutCreadoPorInput";
import { AvanceCreateWithoutCreadoPorInput } from "../inputs/AvanceCreateWithoutCreadoPorInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";
export declare class AvanceCreateNestedManyWithoutCreadoPorInput {
    create?: AvanceCreateWithoutCreadoPorInput[] | undefined;
    connectOrCreate?: AvanceCreateOrConnectWithoutCreadoPorInput[] | undefined;
    createMany?: AvanceCreateManyCreadoPorInputEnvelope | undefined;
    connect?: AvanceWhereUniqueInput[] | undefined;
}
