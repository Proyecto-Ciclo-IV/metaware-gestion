"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyAvanceArgs_1 = require("./args/FindManyAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const helpers_1 = require("../../../helpers");
let FindManyAvanceResolver = class FindManyAvanceResolver {
    async avances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyAvanceResolver.prototype, "avances", null);
FindManyAvanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], FindManyAvanceResolver);
exports.FindManyAvanceResolver = FindManyAvanceResolver;
