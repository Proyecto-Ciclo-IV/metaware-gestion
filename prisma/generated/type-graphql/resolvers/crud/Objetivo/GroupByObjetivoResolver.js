"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByObjetivoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByObjetivoArgs_1 = require("./args/GroupByObjetivoArgs");
const Objetivo_1 = require("../../../models/Objetivo");
const ObjetivoGroupBy_1 = require("../../outputs/ObjetivoGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByObjetivoResolver = class GroupByObjetivoResolver {
    async groupByObjetivo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByObjetivoResolver.prototype, "groupByObjetivo", null);
GroupByObjetivoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Objetivo_1.Objetivo)
], GroupByObjetivoResolver);
exports.GroupByObjetivoResolver = GroupByObjetivoResolver;
