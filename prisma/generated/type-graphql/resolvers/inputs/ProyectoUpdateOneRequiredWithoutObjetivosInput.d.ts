import { ProyectoCreateOrConnectWithoutObjetivosInput } from "../inputs/ProyectoCreateOrConnectWithoutObjetivosInput";
import { ProyectoCreateWithoutObjetivosInput } from "../inputs/ProyectoCreateWithoutObjetivosInput";
import { ProyectoUpdateWithoutObjetivosInput } from "../inputs/ProyectoUpdateWithoutObjetivosInput";
import { ProyectoUpsertWithoutObjetivosInput } from "../inputs/ProyectoUpsertWithoutObjetivosInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoUpdateOneRequiredWithoutObjetivosInput {
    create?: ProyectoCreateWithoutObjetivosInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutObjetivosInput | undefined;
    upsert?: ProyectoUpsertWithoutObjetivosInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
    update?: ProyectoUpdateWithoutObjetivosInput | undefined;
}
