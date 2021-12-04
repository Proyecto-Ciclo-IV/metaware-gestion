import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AvanceScalarWhereInput {
    AND?: AvanceScalarWhereInput[] | undefined;
    OR?: AvanceScalarWhereInput[] | undefined;
    NOT?: AvanceScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    fecha?: DateTimeFilter | undefined;
    descripcion?: StringFilter | undefined;
    observaciones?: StringFilter | undefined;
    proyectoId?: StringFilter | undefined;
    UserId?: StringFilter | undefined;
}
