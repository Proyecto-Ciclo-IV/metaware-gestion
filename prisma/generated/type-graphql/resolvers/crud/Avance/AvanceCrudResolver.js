"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateAvanceArgs_1 = require("./args/AggregateAvanceArgs");
const CreateAvanceArgs_1 = require("./args/CreateAvanceArgs");
const CreateManyAvanceArgs_1 = require("./args/CreateManyAvanceArgs");
const DeleteAvanceArgs_1 = require("./args/DeleteAvanceArgs");
const DeleteManyAvanceArgs_1 = require("./args/DeleteManyAvanceArgs");
const FindFirstAvanceArgs_1 = require("./args/FindFirstAvanceArgs");
const FindManyAvanceArgs_1 = require("./args/FindManyAvanceArgs");
const FindUniqueAvanceArgs_1 = require("./args/FindUniqueAvanceArgs");
const GroupByAvanceArgs_1 = require("./args/GroupByAvanceArgs");
const UpdateAvanceArgs_1 = require("./args/UpdateAvanceArgs");
const UpdateManyAvanceArgs_1 = require("./args/UpdateManyAvanceArgs");
const UpsertAvanceArgs_1 = require("./args/UpsertAvanceArgs");
const helpers_1 = require("../../../helpers");
const Avance_1 = require("../../../models/Avance");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAvance_1 = require("../../outputs/AggregateAvance");
const AvanceGroupBy_1 = require("../../outputs/AvanceGroupBy");
let AvanceCrudResolver = class AvanceCrudResolver {
    async avance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async avances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAvance(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAvance(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Avance_1.Avance, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueAvanceArgs_1.FindUniqueAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "avance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Avance_1.Avance, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstAvanceArgs_1.FindFirstAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "findFirstAvance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Avance_1.Avance], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyAvanceArgs_1.FindManyAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "avances", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateAvanceArgs_1.CreateAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "createAvance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyAvanceArgs_1.CreateManyAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "createManyAvance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteAvanceArgs_1.DeleteAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "deleteAvance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateAvanceArgs_1.UpdateAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "updateAvance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyAvanceArgs_1.DeleteManyAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "deleteManyAvance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyAvanceArgs_1.UpdateManyAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "updateManyAvance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertAvanceArgs_1.UpsertAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "upsertAvance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateAvance_1.AggregateAvance, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateAvanceArgs_1.AggregateAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "aggregateAvance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [AvanceGroupBy_1.AvanceGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByAvanceArgs_1.GroupByAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvanceCrudResolver.prototype, "groupByAvance", null);
AvanceCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], AvanceCrudResolver);
exports.AvanceCrudResolver = AvanceCrudResolver;
