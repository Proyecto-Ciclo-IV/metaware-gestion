import { GraphQLResolveInfo } from "graphql";
import { AggregateProyectoArgs } from "./args/AggregateProyectoArgs";
import { CreateManyProyectoArgs } from "./args/CreateManyProyectoArgs";
import { CreateProyectoArgs } from "./args/CreateProyectoArgs";
import { DeleteManyProyectoArgs } from "./args/DeleteManyProyectoArgs";
import { DeleteProyectoArgs } from "./args/DeleteProyectoArgs";
import { FindFirstProyectoArgs } from "./args/FindFirstProyectoArgs";
import { FindManyProyectoArgs } from "./args/FindManyProyectoArgs";
import { FindUniqueProyectoArgs } from "./args/FindUniqueProyectoArgs";
import { GroupByProyectoArgs } from "./args/GroupByProyectoArgs";
import { UpdateManyProyectoArgs } from "./args/UpdateManyProyectoArgs";
import { UpdateProyectoArgs } from "./args/UpdateProyectoArgs";
import { UpsertProyectoArgs } from "./args/UpsertProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProyecto } from "../../outputs/AggregateProyecto";
import { ProyectoGroupBy } from "../../outputs/ProyectoGroupBy";
export declare class ProyectoCrudResolver {
    proyecto(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProyectoArgs): Promise<Proyecto | null>;
    findFirstProyecto(ctx: any, info: GraphQLResolveInfo, args: FindFirstProyectoArgs): Promise<Proyecto | null>;
    proyectos(ctx: any, info: GraphQLResolveInfo, args: FindManyProyectoArgs): Promise<Proyecto[]>;
    createProyecto(ctx: any, info: GraphQLResolveInfo, args: CreateProyectoArgs): Promise<Proyecto>;
    createManyProyecto(ctx: any, info: GraphQLResolveInfo, args: CreateManyProyectoArgs): Promise<AffectedRowsOutput>;
    deleteProyecto(ctx: any, info: GraphQLResolveInfo, args: DeleteProyectoArgs): Promise<Proyecto | null>;
    updateProyecto(ctx: any, info: GraphQLResolveInfo, args: UpdateProyectoArgs): Promise<Proyecto | null>;
    deleteManyProyecto(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProyectoArgs): Promise<AffectedRowsOutput>;
    updateManyProyecto(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProyectoArgs): Promise<AffectedRowsOutput>;
    upsertProyecto(ctx: any, info: GraphQLResolveInfo, args: UpsertProyectoArgs): Promise<Proyecto>;
    aggregateProyecto(ctx: any, info: GraphQLResolveInfo, args: AggregateProyectoArgs): Promise<AggregateProyecto>;
    groupByProyecto(ctx: any, info: GraphQLResolveInfo, args: GroupByProyectoArgs): Promise<ProyectoGroupBy[]>;
}
