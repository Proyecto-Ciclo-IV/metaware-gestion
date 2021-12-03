import { ObjetivoCreateManyProyectoInputEnvelope } from "../inputs/ObjetivoCreateManyProyectoInputEnvelope";
import { ObjetivoCreateOrConnectWithoutProyectoInput } from "../inputs/ObjetivoCreateOrConnectWithoutProyectoInput";
import { ObjetivoCreateWithoutProyectoInput } from "../inputs/ObjetivoCreateWithoutProyectoInput";
import { ObjetivoScalarWhereInput } from "../inputs/ObjetivoScalarWhereInput";
import { ObjetivoUpdateManyWithWhereWithoutProyectoInput } from "../inputs/ObjetivoUpdateManyWithWhereWithoutProyectoInput";
import { ObjetivoUpdateWithWhereUniqueWithoutProyectoInput } from "../inputs/ObjetivoUpdateWithWhereUniqueWithoutProyectoInput";
import { ObjetivoUpsertWithWhereUniqueWithoutProyectoInput } from "../inputs/ObjetivoUpsertWithWhereUniqueWithoutProyectoInput";
import { ObjetivoWhereUniqueInput } from "../inputs/ObjetivoWhereUniqueInput";
export declare class ObjetivoUpdateManyWithoutProyectoInput {
    create?: ObjetivoCreateWithoutProyectoInput[] | undefined;
    connectOrCreate?: ObjetivoCreateOrConnectWithoutProyectoInput[] | undefined;
    upsert?: ObjetivoUpsertWithWhereUniqueWithoutProyectoInput[] | undefined;
    createMany?: ObjetivoCreateManyProyectoInputEnvelope | undefined;
    set?: ObjetivoWhereUniqueInput[] | undefined;
    disconnect?: ObjetivoWhereUniqueInput[] | undefined;
    delete?: ObjetivoWhereUniqueInput[] | undefined;
    connect?: ObjetivoWhereUniqueInput[] | undefined;
    update?: ObjetivoUpdateWithWhereUniqueWithoutProyectoInput[] | undefined;
    updateMany?: ObjetivoUpdateManyWithWhereWithoutProyectoInput[] | undefined;
    deleteMany?: ObjetivoScalarWhereInput[] | undefined;
}
