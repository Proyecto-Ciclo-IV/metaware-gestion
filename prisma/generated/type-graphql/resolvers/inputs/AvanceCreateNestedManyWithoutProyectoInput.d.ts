import { AvanceCreateManyProyectoInputEnvelope } from "../inputs/AvanceCreateManyProyectoInputEnvelope";
import { AvanceCreateOrConnectWithoutProyectoInput } from "../inputs/AvanceCreateOrConnectWithoutProyectoInput";
import { AvanceCreateWithoutProyectoInput } from "../inputs/AvanceCreateWithoutProyectoInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";
export declare class AvanceCreateNestedManyWithoutProyectoInput {
    create?: AvanceCreateWithoutProyectoInput[] | undefined;
    connectOrCreate?: AvanceCreateOrConnectWithoutProyectoInput[] | undefined;
    createMany?: AvanceCreateManyProyectoInputEnvelope | undefined;
    connect?: AvanceWhereUniqueInput[] | undefined;
}
