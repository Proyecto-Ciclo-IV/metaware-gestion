import { InscripcionCountAggregate } from "../outputs/InscripcionCountAggregate";
import { InscripcionMaxAggregate } from "../outputs/InscripcionMaxAggregate";
import { InscripcionMinAggregate } from "../outputs/InscripcionMinAggregate";
export declare class InscripcionGroupBy {
    id: string;
    estado: "Aceptada" | "Rechazada";
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyectoId: string;
    UserId: string;
    _count: InscripcionCountAggregate | null;
    _min: InscripcionMinAggregate | null;
    _max: InscripcionMaxAggregate | null;
}
