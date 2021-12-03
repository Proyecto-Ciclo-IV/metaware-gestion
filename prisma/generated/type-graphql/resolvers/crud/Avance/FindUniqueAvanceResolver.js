"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueAvanceArgs_1 = require("./args/FindUniqueAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const helpers_1 = require("../../../helpers");
let FindUniqueAvanceResolver = class FindUniqueAvanceResolver {
    async avance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findUnique({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueAvanceArgs_1.FindUniqueAvanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindUniqueAvanceResolver.prototype, "avance", null);
FindUniqueAvanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], FindUniqueAvanceResolver);
exports.FindUniqueAvanceResolver = FindUniqueAvanceResolver;
