"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstAvanceArgs_1 = require("./args/FindFirstAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const helpers_1 = require("../../../helpers");
let FindFirstAvanceResolver = class FindFirstAvanceResolver {
    async findFirstAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstAvanceArgs_1.FindFirstAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstAvanceResolver.prototype, "findFirstAvance", null);
FindFirstAvanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], FindFirstAvanceResolver);
exports.FindFirstAvanceResolver = FindFirstAvanceResolver;
