import { AvanceCountAggregate } from "../outputs/AvanceCountAggregate";
import { AvanceMaxAggregate } from "../outputs/AvanceMaxAggregate";
import { AvanceMinAggregate } from "../outputs/AvanceMinAggregate";
export declare class AggregateAvance {
    _count: AvanceCountAggregate | null;
    _min: AvanceMinAggregate | null;
    _max: AvanceMaxAggregate | null;
}
