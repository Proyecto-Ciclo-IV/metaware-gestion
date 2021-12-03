import { ObjetivoOrderByWithRelationInput } from "../../../inputs/ObjetivoOrderByWithRelationInput";
import { ObjetivoWhereInput } from "../../../inputs/ObjetivoWhereInput";
import { ObjetivoWhereUniqueInput } from "../../../inputs/ObjetivoWhereUniqueInput";
export declare class ProyectoObjetivosArgs {
    where?: ObjetivoWhereInput | undefined;
    orderBy?: ObjetivoOrderByWithRelationInput[] | undefined;
    cursor?: ObjetivoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "descripcion" | "tipo" | "proyectoId"> | undefined;
}
