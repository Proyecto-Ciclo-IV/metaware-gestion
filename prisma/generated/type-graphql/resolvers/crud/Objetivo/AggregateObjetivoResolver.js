"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateObjetivoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateObjetivoArgs_1 = require("./args/AggregateObjetivoArgs");
const Objetivo_1 = require("../../../models/Objetivo");
const AggregateObjetivo_1 = require("../../outputs/AggregateObjetivo");
const helpers_1 = require("../../../helpers");
let AggregateObjetivoResolver = class AggregateObjetivoResolver {
    async aggregateObjetivo(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateObjetivoResolver.prototype, "aggregateObjetivo", null);
AggregateObjetivoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Objetivo_1.Objetivo)
], AggregateObjetivoResolver);
exports.AggregateObjetivoResolver = AggregateObjetivoResolver;
