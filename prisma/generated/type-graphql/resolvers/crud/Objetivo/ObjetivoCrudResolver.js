"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivoCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateObjetivoArgs_1 = require("./args/AggregateObjetivoArgs");
const CreateManyObjetivoArgs_1 = require("./args/CreateManyObjetivoArgs");
const CreateObjetivoArgs_1 = require("./args/CreateObjetivoArgs");
const DeleteManyObjetivoArgs_1 = require("./args/DeleteManyObjetivoArgs");
const DeleteObjetivoArgs_1 = require("./args/DeleteObjetivoArgs");
const FindFirstObjetivoArgs_1 = require("./args/FindFirstObjetivoArgs");
const FindManyObjetivoArgs_1 = require("./args/FindManyObjetivoArgs");
const FindUniqueObjetivoArgs_1 = require("./args/FindUniqueObjetivoArgs");
const GroupByObjetivoArgs_1 = require("./args/GroupByObjetivoArgs");
const UpdateManyObjetivoArgs_1 = require("./args/UpdateManyObjetivoArgs");
const UpdateObjetivoArgs_1 = require("./args/UpdateObjetivoArgs");
const UpsertObjetivoArgs_1 = require("./args/UpsertObjetivoArgs");
const helpers_1 = require("../../../helpers");
const Objetivo_1 = require("../../../models/Objetivo");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateObjetivo_1 = require("../../outputs/AggregateObjetivo");
const ObjetivoGroupBy_1 = require("../../outputs/ObjetivoGroupBy");
let ObjetivoCrudResolver = class ObjetivoCrudResolver {
    async objetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstObjetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async objetivos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createObjetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyObjetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteObjetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateObjetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyObjetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyObjetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertObjetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateObjetivo(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByObjetivo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Objetivo_1.Objetivo, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueObjetivoArgs_1.FindUniqueObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "objetivo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Objetivo_1.Objetivo, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstObjetivoArgs_1.FindFirstObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "findFirstObjetivo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Objetivo_1.Objetivo], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyObjetivoArgs_1.FindManyObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "objetivos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Objetivo_1.Objetivo, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateObjetivoArgs_1.CreateObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "createObjetivo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyObjetivoArgs_1.CreateManyObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "createManyObjetivo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Objetivo_1.Objetivo, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteObjetivoArgs_1.DeleteObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "deleteObjetivo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Objetivo_1.Objetivo, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateObjetivoArgs_1.UpdateObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "updateObjetivo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyObjetivoArgs_1.DeleteManyObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "deleteManyObjetivo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyObjetivoArgs_1.UpdateManyObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "updateManyObjetivo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Objetivo_1.Objetivo, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertObjetivoArgs_1.UpsertObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "upsertObjetivo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateObjetivo_1.AggregateObjetivo, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateObjetivoArgs_1.AggregateObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "aggregateObjetivo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [ObjetivoGroupBy_1.ObjetivoGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByObjetivoArgs_1.GroupByObjetivoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ObjetivoCrudResolver.prototype, "groupByObjetivo", null);
ObjetivoCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Objetivo_1.Objetivo)
], ObjetivoCrudResolver);
exports.ObjetivoCrudResolver = ObjetivoCrudResolver;
