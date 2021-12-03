import { AvanceCreateManyProyectoInputEnvelope } from "../inputs/AvanceCreateManyProyectoInputEnvelope";
import { AvanceCreateOrConnectWithoutProyectoInput } from "../inputs/AvanceCreateOrConnectWithoutProyectoInput";
import { AvanceCreateWithoutProyectoInput } from "../inputs/AvanceCreateWithoutProyectoInput";
import { AvanceScalarWhereInput } from "../inputs/AvanceScalarWhereInput";
import { AvanceUpdateManyWithWhereWithoutProyectoInput } from "../inputs/AvanceUpdateManyWithWhereWithoutProyectoInput";
import { AvanceUpdateWithWhereUniqueWithoutProyectoInput } from "../inputs/AvanceUpdateWithWhereUniqueWithoutProyectoInput";
import { AvanceUpsertWithWhereUniqueWithoutProyectoInput } from "../inputs/AvanceUpsertWithWhereUniqueWithoutProyectoInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";
export declare class AvanceUpdateManyWithoutProyectoInput {
    create?: AvanceCreateWithoutProyectoInput[] | undefined;
    connectOrCreate?: AvanceCreateOrConnectWithoutProyectoInput[] | undefined;
    upsert?: AvanceUpsertWithWhereUniqueWithoutProyectoInput[] | undefined;
    createMany?: AvanceCreateManyProyectoInputEnvelope | undefined;
    set?: AvanceWhereUniqueInput[] | undefined;
    disconnect?: AvanceWhereUniqueInput[] | undefined;
    delete?: AvanceWhereUniqueInput[] | undefined;
    connect?: AvanceWhereUniqueInput[] | undefined;
    update?: AvanceUpdateWithWhereUniqueWithoutProyectoInput[] | undefined;
    updateMany?: AvanceUpdateManyWithWhereWithoutProyectoInput[] | undefined;
    deleteMany?: AvanceScalarWhereInput[] | undefined;
}
