import { AvanceOrderByWithRelationInput } from "../../../inputs/AvanceOrderByWithRelationInput";
import { AvanceWhereInput } from "../../../inputs/AvanceWhereInput";
import { AvanceWhereUniqueInput } from "../../../inputs/AvanceWhereUniqueInput";
export declare class FindManyAvanceArgs {
    where?: AvanceWhereInput | undefined;
    orderBy?: AvanceOrderByWithRelationInput[] | undefined;
    cursor?: AvanceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "fecha" | "descripcion" | "observaciones" | "proyectoId" | "UserId"> | undefined;
}
