import { ObjetivoCountAggregate } from "../outputs/ObjetivoCountAggregate";
import { ObjetivoMaxAggregate } from "../outputs/ObjetivoMaxAggregate";
import { ObjetivoMinAggregate } from "../outputs/ObjetivoMinAggregate";
export declare class ObjetivoGroupBy {
    id: string;
    descripcion: string;
    tipo: "General" | "Especifico";
    proyectoId: string;
    _count: ObjetivoCountAggregate | null;
    _min: ObjetivoMinAggregate | null;
    _max: ObjetivoMaxAggregate | null;
}
