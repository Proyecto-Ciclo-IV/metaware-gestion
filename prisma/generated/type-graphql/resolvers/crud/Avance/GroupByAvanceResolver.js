"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByAvanceArgs_1 = require("./args/GroupByAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const AvanceGroupBy_1 = require("../../outputs/AvanceGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAvanceResolver = class GroupByAvanceResolver {
    async groupByAvance(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByAvanceResolver.prototype, "groupByAvance", null);
GroupByAvanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], GroupByAvanceResolver);
exports.GroupByAvanceResolver = GroupByAvanceResolver;
