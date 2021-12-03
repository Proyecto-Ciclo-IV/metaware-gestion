import { ObjetivoCreateManyProyectoInputEnvelope } from "../inputs/ObjetivoCreateManyProyectoInputEnvelope";
import { ObjetivoCreateOrConnectWithoutProyectoInput } from "../inputs/ObjetivoCreateOrConnectWithoutProyectoInput";
import { ObjetivoCreateWithoutProyectoInput } from "../inputs/ObjetivoCreateWithoutProyectoInput";
import { ObjetivoWhereUniqueInput } from "../inputs/ObjetivoWhereUniqueInput";
export declare class ObjetivoCreateNestedManyWithoutProyectoInput {
    create?: ObjetivoCreateWithoutProyectoInput[] | undefined;
    connectOrCreate?: ObjetivoCreateOrConnectWithoutProyectoInput[] | undefined;
    createMany?: ObjetivoCreateManyProyectoInputEnvelope | undefined;
    connect?: ObjetivoWhereUniqueInput[] | undefined;
}
