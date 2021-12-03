"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueObjetivoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueObjetivoArgs_1 = require("./args/FindUniqueObjetivoArgs");
const Objetivo_1 = require("../../../models/Objetivo");
const helpers_1 = require("../../../helpers");
let FindUniqueObjetivoResolver = class FindUniqueObjetivoResolver {
    async objetivo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivo.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], FindUniqueObjetivoResolver.prototype, "objetivo", null);
FindUniqueObjetivoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Objetivo_1.Objetivo)
], FindUniqueObjetivoResolver);
exports.FindUniqueObjetivoResolver = FindUniqueObjetivoResolver;
