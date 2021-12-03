"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertAvanceArgs_1 = require("./args/UpsertAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const helpers_1 = require("../../../helpers");
let UpsertAvanceResolver = class UpsertAvanceResolver {
    async upsertAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertAvanceResolver.prototype, "upsertAvance", null);
UpsertAvanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], UpsertAvanceResolver);
exports.UpsertAvanceResolver = UpsertAvanceResolver;
