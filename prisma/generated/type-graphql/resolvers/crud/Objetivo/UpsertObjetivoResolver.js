"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertObjetivoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertObjetivoArgs_1 = require("./args/UpsertObjetivoArgs");
const Objetivo_1 = require("../../../models/Objetivo");
const helpers_1 = require("../../../helpers");
let UpsertObjetivoResolver = class UpsertObjetivoResolver {
    async upsertObjetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertObjetivoResolver.prototype, "upsertObjetivo", null);
UpsertObjetivoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Objetivo_1.Objetivo)
], UpsertObjetivoResolver);
exports.UpsertObjetivoResolver = UpsertObjetivoResolver;
