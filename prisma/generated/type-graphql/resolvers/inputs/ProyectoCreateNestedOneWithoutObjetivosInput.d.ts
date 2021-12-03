import { ProyectoCreateOrConnectWithoutObjetivosInput } from "../inputs/ProyectoCreateOrConnectWithoutObjetivosInput";
import { ProyectoCreateWithoutObjetivosInput } from "../inputs/ProyectoCreateWithoutObjetivosInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoCreateNestedOneWithoutObjetivosInput {
    create?: ProyectoCreateWithoutObjetivosInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutObjetivosInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
}
